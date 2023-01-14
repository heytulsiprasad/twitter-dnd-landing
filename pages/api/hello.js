// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res
    .status(200)
    .send(`Good ${new Date().getHours() < 12 ? "Morning" : "Evening"}`);
}
