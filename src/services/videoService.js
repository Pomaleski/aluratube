import { createClient } from "@supabase/supabase-js";

const PROJECT_URL = "https://ijhvwdptncioyxvymsyu.supabase.co";
const PUBLIC_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlqaHZ3ZHB0bmNpb3l4dnltc3l1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgzMjM4NDcsImV4cCI6MTk4Mzg5OTg0N30._Nxm5QVVWfdqDOlkpT3W4HEccuCqkUXi-XY8sjsjzIA";
const supabase = createClient(PROJECT_URL, PUBLIC_KEY);

export function videoService() {
    return {
        getAllVideos() {
            return supabase
                .from("video")
                .select("*")
            }
        }
}