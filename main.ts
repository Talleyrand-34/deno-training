// write using deno standart library, a hello world for a web server
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

function handler(_req: Request): Response {
  return new Response("Hello, World!");
}

console.log("Listening on http://localhost:8000");
serve(handler);
