import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.(7).VITE_SUPABASE_URL
const supabasePublishableKey = import.(7).VITE_SUPABASE_PUBLISHABLE_KEY

if (!supabaseUrl || !supabasePublishableKey) {
    console.error("Supabase 환경 변수(URL/PUBLISHABLE_KEY)가 누락되었습니다. .env.local 파일을 확인하세요.")
    throw new Error("Supabase 환경 변수(URL/PUBLISHABLE_KEY)가 누락되었습니다. .env.local 파일을 확인하세요.")
}

export const supabase = createClient(
    supabaseUrl,
    supabasePublishableKey
)
