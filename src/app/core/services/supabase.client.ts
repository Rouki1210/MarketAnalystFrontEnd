// supabase.client.ts
import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
    'https://wrrxyetefpebocpnqnes.supabase.co',
    'sb_publishable_0i_MheczDg-hH1p9n4Zrvw_LvegNZXt',
    {
        auth: {
            persistSession: false,
            autoRefreshToken: false,
            detectSessionInUrl: false
        }
    }
);
