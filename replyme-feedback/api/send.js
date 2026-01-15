import fetch from "node-fetch";

export default async function handler(req, res) {
    if (req.method === "POST") {
        const { name, message } = req.body;

        const TOKEN = "8511117986:AAFCU7bSrF9GXrB127GrBrtEChko11GZZso";
        const CHAT_ID = "8511117986";

        const text = `Новое сообщение от ${name}:\n${message}`;

        try {
            await fetch(`https://api.telegram.org/bot${TOKEN}/sendMessage`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ chat_id: CHAT_ID, text })
            });
            res.status(200).json({ status: "ok" });
        } catch (err) {
            console.error(err);
            res.status(500).json({ status: "error" });
        }
    } else {
        res.status(405).json({ status: "method not allowed" });
    }
}
