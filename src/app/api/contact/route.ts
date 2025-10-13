// app/api/contact/route.ts
import { NextResponse } from 'next/server';
import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL, // in .env file
});

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    const result = await pool.query(
      `SELECT * FROM fn_contact_message('I', NULL, $1, $2, $3);`,
      [name, email, message]
    );

    return NextResponse.json({
      success: true,
      message: 'Message saved successfully!',
      data: result.rows[0],
    });
  } catch (error: any) {
    console.error(error);
    return NextResponse.json(
      { success: false, message: 'Server error. Try again later.' },
      { status: 500 }
    );
  }
}
