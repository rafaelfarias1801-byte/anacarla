module.exports = (req, res) => {
  res.setHeader('Content-Type', 'text/vcard; charset=utf-8');
  res.setHeader('Content-Disposition', 'attachment; filename="AnaCarla.vcf"');
  res.send(`BEGIN:VCARD
VERSION:3.0
FN:Ana Carla Sella
N:Sella;Ana Carla;;;
ORG:ACS Arquitetura e Urbanismo
TITLE:Arquiteta & Urbanista
TEL;TYPE=CELL:+5549998104898
EMAIL:anacarlasella@gmail.com
URL:https://anacarla.vercel.app
NOTE:CAU A289707-5
END:VCARD`);
};
