import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

# TODO: Change Email and SMTP server and add to .env

EMAIL = "francois@gardenrouteandkleinkaroo.co.za"
PASSWORD = "Es#r+&yQ)tQ9"
SMTP_SERVER = "mail.gardenrouteandkleinkaroo.co.za"
SMTP_PORT = 587
TO_EMAIL = "francois.schoeman15@gmail.com"

def send_email(name, phone, to_email, subject, message):
    with smtplib.SMTP(SMTP_SERVER, SMTP_PORT) as server:
        msg = MIMEMultipart()
        msg['From'] = EMAIL
        msg['To'] = to_email
        msg['Subject'] = subject
        msg.attach(MIMEText(f"Name: {name}\n", 'plain'))
        msg.attach(MIMEText(f"Name: {phone}\n", 'plain'))
        msg.attach(MIMEText(f"Email: {to_email}\n", 'plain'))
        msg.attach(MIMEText(f"Message: {message}\n", 'plain'))
        text = msg.as_string()

        server.ehlo()
        server.starttls()
        server.ehlo()
        server.login(EMAIL, PASSWORD)
        server.sendmail(EMAIL, TO_EMAIL, text)
        server.quit()


def send_booking_email(name, phone, to_email, client_email, arrival_date, departure_date, subject, message):
    with smtplib.SMTP(SMTP_SERVER, SMTP_PORT) as server:
        msg = MIMEMultipart()
        msg['From'] = EMAIL
        msg['To'] = to_email
        msg['Subject'] = subject
        msg.attach(MIMEText(f"Name: {name}\n", 'plain'))
        msg.attach(MIMEText(f"Name: {phone}\n", 'plain'))
        msg.attach(MIMEText(f"Email: {to_email}\n", 'plain'))
        msg.attach(MIMEText(f"Listing Owner's Email: {client_email}\n", 'plain'))
        msg.attach(MIMEText(f"Arrival Date: {arrival_date}\n", 'plain'))
        msg.attach(MIMEText(f"Departure Date: {departure_date}\n", 'plain'))
        msg.attach(MIMEText(f"Message: {message}\n", 'plain'))
        text = msg.as_string()

        server.ehlo()
        server.starttls()
        server.ehlo()
        server.login(EMAIL, PASSWORD)
        server.sendmail(EMAIL, TO_EMAIL, text)
        server.quit()