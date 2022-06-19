import server from './app';

server.listen(process.env.PORT, () => {
  console.log(`Rodando na porta ${process.env.PORT}`);
})