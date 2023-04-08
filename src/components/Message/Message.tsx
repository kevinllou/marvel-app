import './Message.scss';

function Message({ typeMessage }:{ typeMessage: string }) {
  return (
    <section className="message">
      <i className="fa-solid fa-circle-exclamation" />
      <p>
        {typeMessage}
      </p>

    </section>
  );
}

export default Message;
