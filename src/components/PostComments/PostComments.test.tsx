import { fireEvent, render, screen } from '@testing-library/react';
import Post from '.';
import PostComments from '.';

describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<PostComments/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });
    it('Deve inserir dois comentarios', ()=> {
        render(<Post />)

        // primeiro comentario
        fireEvent.change(screen.getByTestId('campo-comentario'), {
            target: {
                value: 'estou fazendo um comentário'
            }
        })
        fireEvent.click(screen.getByTestId('btn-comentario'))
        expect(screen.getByText('estou fazendo um comentário')).toBeInTheDocument()
        
        // segundo comentario
        fireEvent.change(screen.getByTestId('campo-comentario'), {
            target: {
                value: 'estou fazendo outro comentário'
            }
        })
        fireEvent.click(screen.getByTestId('btn-comentario'))
        expect(screen.getByText('estou fazendo outro comentário')).toBeInTheDocument()
    })
    
});

