import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiTwotoneMail
} from "react-icons/ai";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              Simple <span className="purple"> Introduction </span>
            </h1>
            <p className="home-about-body">
              개발하는 것을 좋아하고 가끔 몰입하면 주변 소리를 듣지 못할 때가 있어요ㅜㅜ 🤷‍♂️
              <br />
              새로운 것을 배우는 것과 기존의  <b className="purple">비효율적인 것을 개선하고 성능을 높이는 것</b>에 관심이 많아요.
              <br />
              맡은 일은 어떻게든 해결하는 편입니다 :)
              <br />
              <br />
              <i>
                <b className="purple"> 커뮤니케이션까지 잘하는 </b>
              </i>
              개발자
              <br />
              가장 자신있는 언어 및 프레임워크는
              <i>
                <b className="purple"> Javascript 와 React.js </b>입니다.
              </i>
              <br />
              <br />
              개발 외적으로는
              <b className="purple"> 영화, 음악듣기, 유튜브보기, 요리하기, 웹툰, 축구, 게임, 각종 아웃도어 스포츠</b> 등을 좋아합니다.<br/>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/zerone2"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:czer01ne@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiTwotoneMail />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
