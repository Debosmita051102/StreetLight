import React from "react";
import { StyledContainer , Header} from "./Hero.styled";
import Card from "../Card/Card";
import { motion } from "framer-motion"; 


const Hero = () => {
  const eventDataArray = [
    {
      TitleText: "RUBY POINT",
      Description:
      "This is the area under Ruby Central's jurisdiction",
      ImageLink:
        "https://yugyugjiyo.com/resources/uploads/hospital/10017/gallery/ruby-general-hospital_banner.jpg",
      link: "/rubyTransformer",
    },
    {
      TitleText: "GARIA METRO",
      Description:
        "This is the area under Garia Central's jurisdiction",
      ImageLink:
        "https://eisamay.com/thumb/98506430/new-garia-metro-98506430.jpg?imgsize=68068&width=1200&height=900&resizemode=75",
              link: "/gariaTransformer",
    },
    {
      TitleText: "HOWRAH JUNCTION",
      Description:
        "This is the area under Howrah Junction's jurisdiction!",
      ImageLink:
        "https://www.financialexpress.com/wp-content/uploads/2020/03/660h.jpg?w=660",
      link: "/howrahTransformer",
    },
    
  ];

  return (
    <>
    <Header>Automated street light and automated fault detection</Header>
    <StyledContainer>
    
      {eventDataArray.map((data, index) => (
        <motion.div
          key={index}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ ease: "easeOut", duration: 0.3, delay: index * 0.2 }}
        >
          <Card
            link={data.link}
            ImageLink={data.ImageLink}
            TitleText={data.TitleText}
            Description={data.Description}
          />
        </motion.div>
      ))}
    </StyledContainer>
    </>
  );
};

export default Hero;
