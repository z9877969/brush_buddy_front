import { Container } from 'shared/components';
import css from './AboutBlog.module.scss';

//import pictures

const AboutBlog = () => {
  return (
    <section className={css.section}>
      <Container>
        <div className="blogContent">
          <div className="textBox">
            <p></p>
          </div>

          <ul>
            <li>
              <a href="">
                <img src="" alt="" />
                <p></p>
              </a>
            </li>

            <li>
              <a href="">
                <img src="" alt="" />
                <p></p>
              </a>
            </li>
          </ul>
        </div>
        <a href="#"></a>
      </Container>
    </section>
  );
};

export default AboutBlog;
