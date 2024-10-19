import React from "react";
import { useState } from "react";
import Card from "./components/Card";
import Favourites from "./components/Favourites";

function App() {
  //Getting the raw data about the songs
  const raw = [
    {
      songName: "Blinding Lights",
      author: "The Weeknd",
      image:
        "https://images.unsplash.com/photo-1668874625692-87c412948045?q=80&w=1901&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      isFavourite: false,
    },
    {
      songName: "Shape of You",
      author: "Ed Sheeran",
      image:
        "https://images.unsplash.com/photo-1668874625692-87c412948045?q=80&w=1901&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      isFavourite: false,
    },
    {
      songName: "Levitating",
      author: "Dua Lipa",
      image:
        "https://images.unsplash.com/photo-1668874625692-87c412948045?q=80&w=1901&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      isFavourite: false,
    },
    {
      songName: "Good 4 U",
      author: "Olivia Rodrigo",
      image:
        "https://images.unsplash.com/photo-1668874625692-87c412948045?q=80&w=1901&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      isFavourite: false,
    },
    {
      songName: "Save Your Tears",
      author: "The Weeknd",
      image:
        "https://images.unsplash.com/photo-1668874625692-87c412948045?q=80&w=1901&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      isFavourite: false,
    },
    {
      songName: "Bad Habits",
      author: "Ed Sheeran",
      image:
        "https://images.unsplash.com/photo-1668874625692-87c412948045?q=80&w=1901&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      isFavourite: false,
    },
    {
      songName: "Montero (Call Me By Your Name)",
      author: "Lil Nas X",
      image:
        "https://images.unsplash.com/photo-1668874625692-87c412948045?q=80&w=1901&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      isFavourite: false,
    },
    {
      songName: "Peaches",
      author: "Justin Bieber",
      image:
        "https://images.unsplash.com/photo-1668874625692-87c412948045?q=80&w=1901&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      isFavourite: false,
    },
    {
      songName: "Drivers License",
      author: "Olivia Rodrigo",
      image:
        "https://images.unsplash.com/photo-1668874625692-87c412948045?q=80&w=1901&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      isFavourite: false,
    },
    {
      songName: "Stay",
      author: "The Kid LAROI, Justin Bieber",
      image:
        "https://images.unsplash.com/photo-1668874625692-87c412948045?q=80&w=1901&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      isFavourite: false,
    },
    {
      songName: "Industry Baby",
      author: "Lil Nas X, Jack Harlow",
      image:
        "https://images.unsplash.com/photo-1668874625692-87c412948045?q=80&w=1901&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      isFavourite: false,
    },
    {
      songName: "Don't Start Now",
      author: "Dua Lipa",
      image:
        "https://images.unsplash.com/photo-1668874625692-87c412948045?q=80&w=1901&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      isFavourite: false,
    },
    {
      songName: "Happier Than Ever",
      author: "Billie Eilish",
      image:
        "https://images.unsplash.com/photo-1668874625692-87c412948045?q=80&w=1901&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      isFavourite: false,
    },
    {
      songName: "Heat Waves",
      author: "Glass Animals",
      image:
        "https://images.unsplash.com/photo-1668874625692-87c412948045?q=80&w=1901&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      isFavourite: false,
    },
    {
      songName: "Astronaut In The Ocean",
      author: "Masked Wolf",
      image:
        "https://images.unsplash.com/photo-1668874625692-87c412948045?q=80&w=1901&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      isFavourite: false,
    },
    {
      songName: "Watermelon Sugar",
      author: "Harry Styles",
      image:
        "https://images.unsplash.com/photo-1668874625692-87c412948045?q=80&w=1901&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      isFavourite: false,
    },
    {
      songName: "Shivers",
      author: "Ed Sheeran",
      image:
        "https://images.unsplash.com/photo-1668874625692-87c412948045?q=80&w=1901&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      isFavourite: false,
    },
  ];

  //Creating a state for handling the data
  const [songData, setSongData] = useState(raw);
  const [favourites, setFavourites] = useState(0);

  const handleSongData = (clickedIndex) => {
    setSongData((prev) => {
      return prev.map((value, index) => {
        if (clickedIndex == index) {
          if (prev[index].isFavourite) {
            setFavourites(favourites - 1);
            return { ...value, isFavourite: !prev[index].isFavourite };
          }
          setFavourites(favourites + 1);
          return { ...value, isFavourite: !prev[index].isFavourite };
        }
        return value;
      });
    });
  };

  return (
    <div className="h-screen w-screen bg-zinc-400">
      <div className="h-1/6 w-screen bg-[#E5D9F2] flex items-center justify-around">
        <h3 className="font-extrabold text-xl text-[#A594F9]">
          Songs Container
        </h3>
        <Favourites values={favourites} />
      </div>
      <div className="h-5/6 w-screen bg-[#F5EFFF] flex flex-wrap gap-5 p-4 justify-center items-center overflow-x-hidden ">
        {songData.map((song, index) => {
          return (
            <Card
              values={song}
              index={index}
              handleAddFavourite={handleSongData}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
