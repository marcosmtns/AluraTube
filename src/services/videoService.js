import { createClient } from "@supabase/supabase-js";

const PROJECT_URL = "https://muxpybyzsbkekupqnfof.supabase.co";
const PUBLIC_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im11eHB5Ynl6c2JrZWt1cHFuZm9mIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njk4MTczMTAsImV4cCI6MTk4NTM5MzMxMH0.LksQxKUr-xyVhd0zwiTtjmm32_Tr6p6JmyOmymn5f_c";
const supabase = createClient(PROJECT_URL, PUBLIC_KEY);

export function videoService() {
    return {
        getAllVideos() {
            return supabase.from("video")
                    .select("*");
        }
    }
}