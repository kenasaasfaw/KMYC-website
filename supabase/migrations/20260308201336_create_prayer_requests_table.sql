
/*
  # Prayer Requests Table

  1. New Tables
    - `prayer_requests`
      - `id` (uuid, primary key) - Unique identifier for each prayer request
      - `name` (text) - Name of the person requesting prayer
      - `email` (text) - Email address for contact
      - `message` (text) - The prayer request message
      - `created_at` (timestamptz) - When the prayer request was submitted
      
  2. Security
    - Enable RLS on `prayer_requests` table
    - Add policy to allow anyone to insert prayer requests
    - Add policy for authenticated users to read all prayer requests
*/

CREATE TABLE IF NOT EXISTS prayer_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE prayer_requests ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit prayer requests"
  ON prayer_requests
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view prayer requests"
  ON prayer_requests
  FOR SELECT
  TO authenticated
  USING (true);