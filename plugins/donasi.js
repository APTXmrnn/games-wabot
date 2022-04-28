let handler =  m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • TRI [089616866270]
│ • TRI [089616866270]
╰────

╭─「 Donasi • Non Pulsa 」
│ • https://saweria.co/sumei
│ • Gopay [089616866270]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

export default handler
