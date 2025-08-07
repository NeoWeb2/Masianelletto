import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, phone, email, date, time, people, comments } = body

    // Validar campos requeridos
    if (!name || !phone || !email || !date || !time || !people) {
      return NextResponse.json(
        { error: 'Faltan campos requeridos' },
        { status: 400 }
      )
    }

    // Formatear la fecha
    const formattedDate = new Date(date).toLocaleDateString('es-ES', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })

    // Log the reservation data (in production, you'd save to database)
    console.log('Nueva reserva:', body)
    
    // Here you would typically:
    // 1. Save to database
    // 2. Send confirmation email
    // 3. Notify restaurant staff
    
    // Crear el contenido del email
    const emailContent = `
      Nueva Reserva - Restaurante Masaniello
      
      DATOS DEL CLIENTE:
      • Nombre: ${name}
      • Teléfono: ${phone}
      • Email: ${email}
      
      DETALLES DE LA RESERVA:
      • Fecha: ${formattedDate}
      • Hora: ${time}
      • Número de personas: ${people}
      
      ${comments ? `COMENTARIOS:\n${comments}` : ''}
      
      ---
      Esta reserva fue enviada desde el formulario web de Masaniello Barcelona.
      Fecha de solicitud: ${new Date().toLocaleString('es-ES')}
    `

    // Si tienes configurado Resend u otro servicio de email, úsalo aquí
    // Por ahora, simularemos el envío exitoso
    
    // Ejemplo con fetch a un servicio de email (descomenta si tienes configurado):
    /*
    const emailResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'reservas@masaniello.com',
        to: ['masaniellobarcelona@gmail.com'],
        subject: `Nueva Reserva - ${name} - ${formattedDate} ${time}`,
        text: emailContent,
      }),
    })

    if (!emailResponse.ok) {
      throw new Error('Error al enviar el email')
    }
    */

    return NextResponse.json({ 
      success: true, 
      message: 'Reserva recibida correctamente' 
    })

  } catch (error) {
    console.error('Error processing reservation:', error)
    return NextResponse.json(
      { success: false, message: 'Error al procesar la reserva' },
      { status: 500 }
    )
  }
}
