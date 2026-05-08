# EmailJS Setup Guide

## Installation

```bash
npm install @emailjs/browser
```

## Setup Steps

### 1. Create EmailJS Account
- Go to: https://www.emailjs.com/
- Sign up for free account

### 2. Add Email Service
1. Go to **Email Services**
2. Click **"Connect new service"**
3. Select **Gmail** (or your preferred email service)
4. Authorize the connection
5. Copy your **Service ID** (e.g., `service_xxxxxx`)

### 3. Create Email Template
1. Go to **Email Templates**
2. Click **"Create New Template"**
3. Use this template (or customize):

```
Hello! You have a new message from {{from_name}}

From: {{from_email}}
Message:
{{message}}

---
Reply to: {{reply_to}}
```

4. Copy your **Template ID** (e.g., `template_xxxxxx`)

### 4. Get Public Key
1. Go to **Account** → **API Keys**
2. Copy your **Public Key**

### 5. Update Contact.jsx

Replace these values in the Contact.jsx file:

```javascript
emailjs.init('YOUR_EMAILJS_PUBLIC_KEY') // Line 15
// Replace with your actual Public Key
```

```javascript
await emailjs.send(
  'YOUR_SERVICE_ID', // Replace with your Service ID
  'YOUR_TEMPLATE_ID', // Replace with your Template ID
  {
    to_email: 'sarah117salem01@gmail.com',
    from_name: formData.name,
    from_email: formData.email,
    message: formData.message,
    reply_to: formData.email
  }
)
```

## Example Configuration

```javascript
// In Contact.jsx - Replace these:
emailjs.init('t_abc123def456')  // Your Public Key
emailjs.send(
  'service_a1b2c3d4',  // Your Service ID
  'template_x1y2z3w4',  // Your Template ID
  { ... }
)
```

## Free Tier Limits
- 200 emails/month for free
- No credit card required
- Upgrade anytime if needed

## Testing
1. Fill the form and submit
2. Check your email
3. Verify it arrived correctly

## Troubleshooting

**Template variables not showing?**
- Make sure template names match exactly: `from_name`, `from_email`, `message`, etc.

**Not receiving emails?**
- Check spam/junk folder
- Verify email service is connected
- Check browser console for errors

**CORS Error?**
- Make sure Public Key is correct
- Verify domain is allowed in EmailJS dashboard
