# nodemailer-application

Hey! this is a really simple project built with NodeJS, Express and Typescript.

# Project config
1 - create a dotenv file and within add three variables: api, email and password. Example: api=3050, email= loremipsum@hotmail.com and password: lorem123.
  this informations are about your personal email.

2 - yarn

3 - yarn dev to run the project

4 - if you are using anothers emails services like Yahoo and Gmail for example, you have to change SMTP (Simple Mail Transfer Protocol) and change at transporterconfig variable
host property.

5 - route to use it on postman/ insomnia (http POST): http://localhost:3050/email/send

SMTP's of mains services:

Yahoo: https://br.ajuda.yahoo.com/kb/SLN4724.html

Hotmail or Outlook: https://support.microsoft.com/en-us/office/pop-imap-and-smtp-settings-8361e398-8af4-4e97-b147-6c6c4ac95353

Gmail: https://support.google.com/a/answer/176600?hl=en

# How to run the function
1 - function requires one argument, this value is the person email you want to send

