-- Run this in the Supabase SQL Editor. The app sends a 128-bit random sync
-- code in X-Sync-Key; RLS restricts each request to the matching row.
create table if not exists public.ged_vocabulary_progress (
  sync_key text primary key check (char_length(sync_key) >= 16),
  payload jsonb not null,
  updated_at timestamptz not null default now()
);

alter table public.ged_vocabulary_progress enable row level security;

create policy "read own GED progress" on public.ged_vocabulary_progress
for select to anon
using (sync_key = coalesce(current_setting('request.headers', true)::json ->> 'x-sync-key', ''));

create policy "create own GED progress" on public.ged_vocabulary_progress
for insert to anon
with check (sync_key = coalesce(current_setting('request.headers', true)::json ->> 'x-sync-key', ''));

create policy "update own GED progress" on public.ged_vocabulary_progress
for update to anon
using (sync_key = coalesce(current_setting('request.headers', true)::json ->> 'x-sync-key', ''))
with check (sync_key = coalesce(current_setting('request.headers', true)::json ->> 'x-sync-key', ''));
