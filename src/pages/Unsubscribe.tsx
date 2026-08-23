import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";

type State = "loading" | "ready" | "already" | "invalid" | "submitting" | "success" | "error";

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL as string;
const SUPABASE_KEY = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY as string;

const Unsubscribe = () => {
  const [params] = useSearchParams();
  const token = params.get("token");
  const [state, setState] = useState<State>("loading");
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    if (!token) {
      setState("invalid");
      return;
    }
    (async () => {
      try {
        const res = await fetch(
          `${SUPABASE_URL}/functions/v1/handle-email-unsubscribe?token=${encodeURIComponent(token)}`,
          { headers: { apikey: SUPABASE_KEY } }
        );
        const data = await res.json();
        if (data.valid) setState("ready");
        else if (data.reason === "already_unsubscribed") setState("already");
        else setState("invalid");
      } catch {
        setState("invalid");
      }
    })();
  }, [token]);

  const handleConfirm = async () => {
    if (!token) return;
    setState("submitting");
    try {
      const { data, error } = await supabase.functions.invoke("handle-email-unsubscribe", {
        body: { token },
      });
      if (error) throw error;
      if (data?.success) setState("success");
      else if (data?.reason === "already_unsubscribed") setState("already");
      else {
        setErrorMsg(data?.error || "Unable to process request.");
        setState("error");
      }
    } catch (e: any) {
      setErrorMsg(e?.message || "Something went wrong.");
      setState("error");
    }
  };

  return (
    <div className="pt-24 pb-20 min-h-screen flex items-center justify-center px-6">
      <div className="bg-card border border-border rounded-2xl p-10 max-w-md w-full text-center space-y-5">
        <h1 className="font-heading text-3xl font-bold">Email Preferences</h1>

        {state === "loading" && (
          <p className="text-muted-foreground">Validating your link…</p>
        )}

        {state === "ready" && (
          <>
            <p className="text-muted-foreground">
              Click below to unsubscribe from Boss Chick Enterprises emails.
            </p>
            <Button onClick={handleConfirm} size="lg" className="w-full">
              Confirm Unsubscribe
            </Button>
          </>
        )}

        {state === "submitting" && (
          <p className="text-muted-foreground">Processing…</p>
        )}

        {state === "success" && (
          <p className="text-muted-foreground">
            You've been unsubscribed. We're sorry to see you go!
          </p>
        )}

        {state === "already" && (
          <p className="text-muted-foreground">This email is already unsubscribed.</p>
        )}

        {state === "invalid" && (
          <p className="text-muted-foreground">
            This unsubscribe link is invalid or has expired.
          </p>
        )}

        {state === "error" && (
          <p className="text-destructive">{errorMsg}</p>
        )}
      </div>
    </div>
  );
};

export default Unsubscribe;
