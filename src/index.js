import React from 'react'; // necessário para o <App />
import ReactDOM from 'react-dom'; // integração do react com a árvore de elementos do browser
import App from './App';

import './global.css';

// aqui está colocando o app na div 'root' do index.html
ReactDOM.render(<App />, document.getElementById('root'));

