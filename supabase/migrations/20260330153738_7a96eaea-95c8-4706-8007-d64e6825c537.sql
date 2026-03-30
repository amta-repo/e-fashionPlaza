
-- Fix permissive INSERT policy on chat_messages
-- Drop the overly permissive policy
DROP POLICY IF EXISTS "Anyone can send messages" ON public.chat_messages;

-- Create a more restrictive policy: authenticated users or with a valid session_id
CREATE POLICY "Authenticated users can send messages" ON public.chat_messages
  FOR INSERT TO authenticated WITH CHECK (auth.uid() = user_id);

-- Allow anonymous users to send with session_id (for chatbot before login)
CREATE POLICY "Anonymous can send with session" ON public.chat_messages
  FOR INSERT TO anon WITH CHECK (user_id IS NULL AND session_id IS NOT NULL AND length(session_id) > 0);
