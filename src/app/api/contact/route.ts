// app/api/contact/route.ts
import { NextResponse } from 'next/server';

// Define a custom error type that includes the code property
interface DatabaseError extends Error {
  code?: string;
}

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    // Input validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, message: 'All fields are required.' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, message: 'Please enter a valid email address.' },
        { status: 400 }
      );
    }

    // Import pg dynamically to avoid build issues
    const { Pool } = await import('pg');

    const pool = new Pool({
      connectionString: process.env.DATABASE_URL,
    });

    const result = await pool.query(
      `SELECT * FROM fn_contact_message('I', NULL, $1, $2, $3);`,
      [name, email, message]
    );

    // Close the pool connection
    await pool.end();

    return NextResponse.json({
      success: true,
      message: 'Message saved successfully!',
      data: result.rows[0],
    });

  } catch (error: unknown) {
    console.error('Database error:', error);
    
    // Type guard to check if it's a DatabaseError with code property
    const isDatabaseError = (err: unknown): err is DatabaseError => {
      return err instanceof Error && 'code' in err;
    };

    // More specific error messages
    if (isDatabaseError(error) && error.code === 'ECONNREFUSED') {
      return NextResponse.json(
        { success: false, message: 'Unable to connect to database.' },
        { status: 503 }
      );
    }

    return NextResponse.json(
      { success: false, message: 'Server error. Try again later.' },
      { status: 500 }
    );
  }
}