import { NextResponse } from "next/server";

const phonePattern = /^[0-9+\-\s]{10,15}$/;

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as {
      name?: string;
      phone?: string;
      message?: string;
    };

    const name = body.name?.trim() ?? "";
    const phone = body.phone?.trim() ?? "";
    const message = body.message?.trim() ?? "";

    if (!name || !phone || !message) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    if (!phonePattern.test(phone)) {
      return NextResponse.json(
        { error: "Please enter a valid phone number." },
        { status: 400 }
      );
    }

    if (message.length < 12) {
      return NextResponse.json(
        { error: "Please provide more project details in your message." },
        { status: 400 }
      );
    }

    // Replace this with database, CRM, email, or WhatsApp integration in production.
    return NextResponse.json(
      {
        success: true,
        message: "Consultation request submitted successfully.",
      },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { error: "Invalid request payload." },
      { status: 400 }
    );
  }
}
