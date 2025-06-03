import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { Container as MuiContainer, Box, Typography } from '@mui/material';

import img1 from '../assets/images/img1.jpg';

function AppAbout() {
  return (
    <div>
      <section id="about" className="block about-block">
        <Container fluid>
          <div className="title-holder">
            <h2>About Us</h2>
            <div className="subtitle">Learn more about us</div>
          </div>
          <Row>
            <Col sm={6}>
              <Image src={img1} fluid />
            </Col>
            <Col sm={6}>
              <p>
                At ADA Surveying Services, we specialize in providing precise and reliable land
                surveying solutions tailored to meet the needs of developers, engineers, architects, and property owners. 
              </p>
              <p>
                From boundary and topographic surveys to engineering and construction layouts, we ensure every project 
                is executed with professionalism and integrity.
              </p>
              <p>
                With a dedication to quality and customer service, ADA Surveying Services is your trusted partner for all your surveying needs.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Force styles using sx */}
      <MuiContainer
        maxWidth="lg"
        sx={{
          backgroundColor: "#ffffff",
          padding: "40px",
          borderRadius: "10px",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
          marginTop: "20px",
        }}
      >
        <Box>
          <Typography
            variant="h5"
            sx={{
              fontWeight: "bold",
              color: "#333",
              fontSize: "1.8rem",
              textAlign: "left",
            }}
          >
            Vision
          </Typography>
          <Typography
            variant="h3"
            sx={{
              fontSize: "1.5rem",
              fontWeight: 500,
              color: "#555",
              marginTop: "10px",
              textAlign: "left",
            }}
          >
            "We envision to be the trusted partner for individuals, businesses, and government entities seeking 
            comprehensive and advanced surveying solutions and technology."
          </Typography>
        </Box>

        <Box mt={3}>
          <Typography variant="body1" sx={{ fontSize: "1rem", color: "#444", textAlign: "left" }}>
            ADA Surveying Services is committed to delivering high-quality work, precise detailing, and personalized service. 
            This dedication has allowed the company to establish a strong reputation and build a network of satisfied clients 
            across various regions and provinces throughout the Philippines.
          </Typography>
        </Box>

        <Box mt={3}>
          <Typography
            variant="h5"
            sx={{
              fontWeight: "bold",
              color: "#333",
              fontSize: "1.8rem",
              textAlign: "left",
            }}
          >
            Mission
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: "1rem",
              color: "#444",
              marginBottom: "10px",
              textAlign: "left",
            }}
          >
            To achieve excellence in every aspect of our business by consistently providing:
          </Typography>

          <Box mt={2}>
            {[
              "To ensure high-quality services.",
              "Be reliable in our surveying solutions and precision to our data.",
              "We are committed to embracing innovative advanced technology.",
              "And fostering a culture of integrity and professionalism.",
            ].map((item, index) => (
              <Typography
                key={index}
                variant="h6"
                sx={{ fontSize: "1.2rem", fontWeight: 400, color: "#444", marginLeft: "20px", textAlign: "left" }}
              >
                {item}
              </Typography>
            ))}
          </Box>
        </Box>
      </MuiContainer>
    </div>
  );
}

export default AppAbout;
