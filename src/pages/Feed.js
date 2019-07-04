import React, { Component } from "react";
import api from "../services/api";
import io from "socket.io-client";

import "./Feed.css";

import more from "../assets/more.png";
import like from "../assets/like.png";
import comment from "../assets/comment.png";
import send from "../assets/send.png";

class Feed extends Component {
  // state: alterações realizadas nesse objeto se refletem no front
  state = {
    feed: []
  };

  handleLike = id => {
    api.post(`/posts/${id}/like`);
  };

  // fica ouvindo atualizações e atualiza em realtime os dados na tela
  registerToSocket = () => {
    const socket = io("http://localhost:3333");

    socket.on("post", newPost => {
      this.setState({ feed: [newPost, ...this.state.feed] });
    });

    socket.on("like", likedPost => {
      this.setState({
        feed: this.state.feed.map(post =>
          post._id === likedPost._id ? likedPost : post
        )
      });
    });
  };

  // componentDidMount: é excutado automaticamente quando o componente é montado em tela
  async componentDidMount() {
    this.registerToSocket();

    const response = await api.get("posts");

    this.setState({ feed: response.data });
  }

  render() {
    return (
      <section id="post-list">
        {this.state.feed.map(post => (
          // importante ter a key para melhor performance do react \\
          <article key={post._id}>
            <header>
              <div className="user-info">
                <span>{post.author}</span>
                <span className="place">{post.place}</span>
              </div>

              <img src={more} alt="Mais" />
            </header>

            <img src={`http://localhost:3333/files/${post.image}`} alt="post" />

            <footer>
              <div className="actions">
                {/* foi adicionado uma função para não executar a função "handleLike" ao carregar a pagina. */}
                <button type="button" onClick={() => this.handleLike(post._id)}>
                  <img src={like} alt="likes" />
                </button>
                <img src={comment} alt="comments" />
                <img src={send} alt="send" />
              </div>

              <strong>{post.likes} curtidas</strong>
              <p>
                {post.description}
                <span>{post.hashtags}</span>
              </p>
            </footer>
          </article>
        ))}
      </section>
    );
  }
}

export default Feed;
