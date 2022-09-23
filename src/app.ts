import express from 'express';
import { usuario } from './routes/usuarioRoutes';
import { curso } from './routes/cursoRoutes';
import { turma } from './routes/turmaRoutes';
import { disciplina } from './routes/disciplinaRoute';
import { aula } from './routes/aulaRoutes';
import { chamada } from './routes/chamadaRoutes';

const app = express();

app.use(express.json());
app.use('/usuario', usuario);
app.use('/curso', curso);
app.use('/turma', turma);
app.use('/disciplina', disciplina);
app.use('/aula', aula);
app.use('/chamada', chamada);

export { app }