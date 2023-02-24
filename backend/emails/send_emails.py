import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

from env import EMAIL, PASSWORD, SMTP_SERVER, SMTP_PORT, TO_EMAIL

def send_email(name="None", phone="None", to_email="None", subject="None", message="None"):
    with smtplib.SMTP(SMTP_SERVER, SMTP_PORT) as server:
        msg = MIMEMultipart()
        msg['From'] = EMAIL
        msg['To'] = to_email
        msg['Subject'] = subject
        msg.attach(MIMEText(f"Name: {name}\n", 'plain'))
        msg.attach(MIMEText(f"Phone: {phone}\n", 'plain'))
        msg.attach(MIMEText(f"Email: {to_email}\n", 'plain'))
        msg.attach(MIMEText(f"Message: {message}\n", 'plain'))
        text = msg.as_string()

        server.ehlo()
        server.starttls()
        server.ehlo()
        server.login(EMAIL, PASSWORD)
        server.sendmail(EMAIL, TO_EMAIL, text)
        server.quit()


def send_booking_email(name="None", phone="None", to_email="None", client_email="None", arrival_date="None", departure_date="None", subject="None", message="None"):
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