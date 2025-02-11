'use client'
//import { Board } from '../core/src/index'
import Button from './components/shared/Botton';
import Card from './components/shared/Card';
import Modal from './components/shared/Modal';

export default function Home() {
  return (
    <div>
      <Card color='primary' noBorder>Estou dentro do Card</Card>

      <Modal visible={false}>Estou dentro do modal</Modal>

      <Button color='primary' onClick={() => console.log('Click')}>Pode clicar</Button>
    </div>
  );
}
