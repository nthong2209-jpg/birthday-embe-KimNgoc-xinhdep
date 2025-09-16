
export default function handler(req, res) {
  // Lấy thông tin cơ bản của request
  const ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress;
  const ua = req.headers["user-agent"];
  const time = new Date().toISOString();

  // Ghi log (xem trong Vercel Dashboard → Functions → Logs)
  console.log("Pixel hit:", { ip, ua, time });

  // Trả về ảnh GIF 1x1 trong suốt
  const pixel = Buffer.from(
    "R0lGODlhAQABAPAAAP///wAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==",
    "base64"
  );
  res.setHeader("Content-Type", "image/gif");
  res.setHeader("Content-Length", pixel.length);
  res.status(200).send(pixel);
}
