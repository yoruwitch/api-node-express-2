// eslint-disable-next-line no-unused-vars
function error404Handler(req, res, next) {
    res.status(404).send({ message: "Página não encontrada" });
}

export default error404Handler;
