import { Main,Header2 } from "./Transformer.styled";
import { useParams } from "react-router-dom";
import Card from "../../Card/Card";
import { motion } from "framer-motion";

const Transformer = () => {
  const { Domain } = useParams();
  const Domains = {
    rubyTransformer: [
      {
        TitleText: "Transformer 1",
        Description: "Click to view the lamp posts' status of Transformer 1",
        ImageLink: "https://5.imimg.com/data5/SELLER/Default/2023/7/323477778/QY/OG/VS/137864987/power-transformer-overhauling-service.jpg",
        link: "/rubyTransformer/Transformer1",
      },
      
      {
        TitleText: "Transformer 2",
        Description:
          "Click to view the lamp posts' status of Transformer 2",
        ImageLink:
          "https://5.imimg.com/data5/LN/CW/MY-3496491/gt-transformer-overhauling-services-500x500.jpg",
        link: "/rubyTransformer/Transformer2",
      },
      {
        TitleText: "Transformer 3",
        Description:
          "Click to view the lamp posts' status of Transformer 3",
        ImageLink:
          "https://5.imimg.com/data5/FB/IJ/PR/SELLER-22759000/power-transformer.jpg",
        link: "/rubyTransformer/Transformer1",
      },

     
    ],
    gariaTransformer: [
      {
        TitleText: "Transformer 1",
        Description:
          "Click to view the lamp posts' status of Transformer 1",
        ImageLink:
          "https://as1.ftcdn.net/v2/jpg/02/30/17/84/1000_F_230178445_yIOQqCVZlGWAoQ3oxSPpRYrXzMkqa4kP.jpg",
        link: "/gariaTransformer/Transformer1",
      },
      
      {
        TitleText: "Transformer 2",
        Description:
          "Click to view the lamp posts' status of Transformer 2",
        ImageLink:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWGRCJRDLnnFfVAxaowF7VaRkhj2ofL56kANha8BUA7cc2SIZ8B5PfbkJ93B9sTl1IqCI&usqp=CAU",
        link: "/gariaTransformer/Transformer1",
      },
      {
        TitleText: "Transformer 3",
        Description:
          "Click to view the lamp posts' status of Transformer 3",
        ImageLink:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLP9wSx49jHNyOWtDRvEUPZ6Rjy-Ve9q-qeXbQTNVOTr0NrhLhG7FrFcGIUgvck9A3GiU&usqp=CAU",
        link: "/gariaTransformer/Transformer1",
      },

      
    ],
    howrahTransformer: [
      {
        TitleText: "Transformer",
        Description:
          "Click to view the lamp posts' status of Transformer ",
        ImageLink:
        "https://5.imimg.com/data5/KZ/TR/RW/SELLER-69409/electrical-power-transformer-500x500.jpg",
        link: "/howrahTransformer/Transformer",
      },
    ],
   
  };

  return (
    <>
    <Header2>TRANSFORMERS</Header2>
      <Main>
        {Domains[Domain] &&
          Domains[Domain].map((data, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                ease: "easeOut",
                duration: 0.3,
                delay: index * 0.2,
              }}
            >
              <Card
                key={data.TitleText}
                TitleText={data.TitleText}
                Description={data.Description}
                ImageLink={data.ImageLink}
                link={data.link}
              />
            </motion.div>
          ))}
      </Main>
    </>
  );
};

export default Transformer;
