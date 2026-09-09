// This app uses Supabase's publishable browser key. It is intentionally public;
// Row Level Security and the private sync code protect each learner's records.
// Never use a service-role key in a browser app.
window.GED_SYNC_CONFIG = {
  supabaseUrl: 'https://bdyrfamrcmcnyirsibhl.supabase.co',
  supabaseAnonKey: 'sb_publishable_eYJWyKNwGD6xCJZtelEHGg_cNhUPTuK',
  table: 'ged_vocabulary_progress'
};
