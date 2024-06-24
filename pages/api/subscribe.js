import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

const filePath = path.join(process.cwd(), 'assets', 'email.json');

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { email } = req.body;
    if (!email || typeof email !== 'string') {
      res.status(400).json({ error: 'Email is required' });
      return;
    }

    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err && err.code !== 'ENOENT') {
        res.status(500).json({ error: 'Error reading email file' });
        return;
      }

      let emails;
      try {
        emails = data ? JSON.parse(data) : [];
        if (!Array.isArray(emails)) {
          emails = [];
        }
      } catch (parseError) {
        emails = [];
      }

      if (emails.includes(email)) {
        res.status(409).json({ error: 'Email already subscribed' });
        return;
      }

      emails.push(email);

      fs.writeFile(filePath, JSON.stringify(emails, null, 2), 'utf8', (writeErr) => {
        if (writeErr) {
          res.status(500).json({ error: 'Error writing email file' });
          return;
        }

        res.status(200).json({ message: 'Email added successfully' });
      });
    });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).json({ error: 'Method not allowed' });
  }
}
