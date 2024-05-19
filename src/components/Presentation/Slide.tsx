import Typography from "@mui/material/Typography";
import { title } from "process";
import { useState } from "react";

interface SlideProps {
  slideNumber: number;
}

interface ContentType {
  title: string;
  text: string;
  pictureSrc?: string;
}

const contents: ContentType[] = [
  {
    title: "Witamy na stronie ryby.pl",
    text: "DUPA",
    pictureSrc: "src/assets/pikecrown.jpg",
  },
  {
    title: "2",
    text: "DUPA",
  },
  {
    title: "3",
    text: "DUPA",
  },
  {
    title: "4",
    text: "DUPA",
  },
  {
    title: "5",
    text: "DUPA",
  },
]

const Slide = (props: SlideProps) => {
  const colorChanger = props.slideNumber * 10;

  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}>
      <div style={{
        background: `radial-gradient(circle, rgba(63,94,251,1) ${colorChanger}%, rgba(252,70,107,1) 100%)`,
        width: "60vw",
        height: "70vh",
        border: "2px solid black",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}>
        <Typography
          variant="h6"
          noWrap
          component="title"
          sx={{
            mr: 2,
            display: { xs: 'none', md: 'flex' },
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.3rem',
            color: 'inherit',
            textDecoration: 'none',
          }}
        >
          {contents[props.slideNumber - 1].title}
        </Typography>
        <Typography
          noWrap
          component="title"
          sx={{
            mr: 2,
            display: { xs: 'none', md: 'flex' },
            fontFamily: 'monospace',
            letterSpacing: '.3rem',
            color: 'inherit',
            textDecoration: 'none',
          }}
        >
          {contents[props.slideNumber - 1].text}
        </Typography>
        {contents[props.slideNumber - 1].pictureSrc && (
          <img
            src={contents[props.slideNumber - 1].pictureSrc}
            alt="Obrazek"
            style={{
              maxWidth: "15rem",
              maxHeight: "15rem",
            }}
          />
        )}
      </div>
    </div>
  )
}

export default Slide