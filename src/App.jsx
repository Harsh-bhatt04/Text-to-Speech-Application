// import { useState } from "react";

// const ImageCard = ({ image, description }) => {
//   const [showContent, setShowContent] = useState(false);
//   const [animatedText, setAnimatedText] = useState("");

//   const handleClick = () => {
//     const isOpening = !showContent;
//     setShowContent(isOpening);

//     // Cancel any ongoing speech and text animation
//     speechSynthesis.cancel();
//     setAnimatedText("");

//     if (isOpening) {
//       // Start speaking
//       const utterance = new SpeechSynthesisUtterance(description);
//       utterance.lang = "en-US";
//       speechSynthesis.speak(utterance);

//       // Start word-by-word animation
//       const words = description.split(" ");
//       let index = 0;

//       const interval = setInterval(() => {
//         if (index < words.length - 1) {
//           setAnimatedText((prev) => prev + (prev ? " " : "") + words[index]);
//           index++;
//         } else {
//           clearInterval(interval);
//         }
//       }, 400);
//        // Adjust speed here (300ms per word)
//     }
//   };

//   return (
//     <div
//       onClick={handleClick}
//       style={{
//         width: "300px",
//         border: "1px solid #ccc",
//         borderRadius: "10px",
//         overflow: "hidden",
//         cursor: "pointer",
//         boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
//         transition: "transform 0.2s ease-in-out",
//       }}
//     >
//       <img
//         src={image}
//         alt="Card"
//         style={{ width: "100%", height: "auto", display: "block" }}
//       />
//       {showContent && (
//         <div
//           style={{
//             padding: "15px",
//             backgroundColor: "black",
//             minHeight: "60px",
//             animation: "fadeIn 0.3s ease-in-out",
//           }}
//         >
//           <p style={{ lineHeight: "1.5", fontSize: "16px" }}>{animatedText}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default function App() {
//   const cards = [
//     {
//       image: "https://imgs.search.brave.com/baRVQRuiV_lbH9GS3AQLIc2bWvy4Kfq72B1sHka42d0/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/YnJpdGFubmljYS5j/b20vNDMvMTc4MTQz/LTA1MC0xRThENjAx/My9tYXJibGUtcG9y/dGFsLVRhai1NYWhh/bC1JbmRpYS1BZ3Jh/LmpwZz93PTMwMA",
//       description:
//         "The Taj Mahal is an ivory-white marble mausoleum on the right bank of the river Yamuna in Agra, Uttar Pradesh, India. It was commissioned in 1631 by the fifth Mughal emperor, Shah Jahan (r. 1628–1658), to house the tomb of his beloved wife, Mumtaz Mahal; it also houses the tomb of Shah Jahan himself. The tomb is the centrepiece of a 17-hectare (42-acre) complex, which includes a mosque and a guest house, and is set in formal gardens bounded on three sides by a crenellated wall."
//     },
//     {
//       image: "https://via.placeholder.com/300x200/ff0000/ffffff",
//       description:
//         "This is the second monument's information. You can hear this as well."
//     }
//   ];

//   return (
//     <div style={{ display: "flex", gap: "20px", padding: "20px" }}>
//       {cards.map((card, index) => (
//         <ImageCard
//           key={index}
//           image={card.image}
//           description={card.description}
//         />
//       ))}
//     </div>
//   );
// }



// import { useState, useEffect, useRef } from "react";

// const ImageCard = ({ image, description }) => {
//   const [showContent, setShowContent] = useState(false);
//   const [animatedText, setAnimatedText] = useState("");
//   const intervalRef = useRef(null);

//   const handleClick = () => {
//     const isOpening = !showContent;
//     setShowContent(isOpening);

//     // Cancel previous animation
//     clearInterval(intervalRef.current);
//     setAnimatedText("");

//     if (window.responsiveVoice) {
//       // Stop any ongoing speech
//       window.responsiveVoice.cancel();
//     }

//     if (isOpening) {
//       // Speak with ResponsiveVoice
//       window.responsiveVoice.speak(description, "UK English Male", {
//         onstart: () => {
//           // Start word-by-word animation when speech starts
//           const words = description.split(" ");
//           let index = 0;

//           intervalRef.current = setInterval(() => {
//             if (index < words.length-1) {
//               setAnimatedText((prev) => (prev ? prev + " " : "") + words[index]);
//               index++;
//             } else {
//               clearInterval(intervalRef.current);
//             }
//           }, 300); // adjust speed here (400ms per word)
//         },
//         onend: () => {
//           clearInterval(intervalRef.current);
//         },
//       });
//     } else {
//       clearInterval(intervalRef.current);
//       setAnimatedText("");
//     }
//   };

//   // Cleanup interval on unmount
//   useEffect(() => {
//     return () => clearInterval(intervalRef.current);
//   }, []);

//   return (
//     <div
//       onClick={handleClick}
//       style={{
//         width: "300px",
//         border: "1px solid #ccc",
//         borderRadius: "10px",
//         overflow: "hidden",
//         cursor: "pointer",
//         boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
//         transition: "transform 0.2s ease-in-out",
//       }}
//     >
//       <img
//         src={image}
//         alt="Card"
//         style={{ width: "100%", height: "auto", display: "block" }}
//       />
//       {showContent && (
//         <div
//           style={{
//             padding: "15px",
//             backgroundColor: "black",
//             minHeight: "60px",
//             animation: "fadeIn 0.3s ease-in-out",
//           }}
//         >
//           <p style={{ lineHeight: "1.5", fontSize: "16px", color: "white" }}>
//             {animatedText}
//           </p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default function App() {
//   const cards = [
//     {
//       image:
//         "https://imgs.search.brave.com/baRVQRuiV_lbH9GS3AQLIc2bWvy4Kfq72B1sHka42d0/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/YnJpdGFubmljYS5j/b20vNDMvMTc4MTQz/LTA1MC0xRThENjAx/My9tYXJibGUtcG9y/dGFsLVRhai1NYWhh/bC1JbmRpYS1BZ3Jh/LmpwZz93PTMwMA",
//       description:
//         "The Taj Mahal is an ivory-white marble mausoleum on the right bank of the river Yamuna in Agra, Uttar Pradesh, India. It was commissioned in 1631 by the fifth Mughal emperor, Shah Jahan (r. 1628–1658), to house the tomb of his beloved wife, Mumtaz Mahal; it also houses the tomb of Shah Jahan himself. The tomb is the centrepiece of a 17-hectare (42-acre) complex, which includes a mosque and a guest house, and is set in formal gardens bounded on three sides by a crenellated wall.",
//     },
//     {
//       image: "https://via.placeholder.com/300x200/ff0000/ffffff",
//       description: "This is the second monument's information. You can hear this as well.",
//     },
//   ];

//   return (
//     <div style={{ display: "flex", gap: "20px", padding: "20px" }}>
//       {cards.map((card, index) => (
//         <ImageCard key={index} image={card.image} description={card.description} />
//       ))}
//     </div>
//   );
// }


import { useState, useEffect, useRef } from "react";

const voices = [
  { label: "English (US) Male", value: "US English Male" },
  { label: "English (UK) Female", value: "UK English Female" },
  { label: "English (UK) Male", value: "UK English Male" },
  { label: "French Female", value: "French Female" },
  { label: "Spanish Female", value: "Spanish Female" },
  { label: "Hindi Female", value: "Hindi Female" },
  { label: "German Male", value: "Deutsch Male" },
  // Add or remove voices as needed
];

const ImageCard = ({ image, description, voice }) => {
  const [showContent, setShowContent] = useState(false);
  const [animatedText, setAnimatedText] = useState("");
  const intervalRef = useRef(null);

  const handleClick = () => {
    const isOpening = !showContent;
    setShowContent(isOpening);

    // Cancel previous animation
    clearInterval(intervalRef.current);
    setAnimatedText("");

    if (window.responsiveVoice) {
      // Stop any ongoing speech
      window.responsiveVoice.cancel();
    }

    if (isOpening) {
      // Speak with ResponsiveVoice using selected voice
      window.responsiveVoice.speak(description, voice, {
        onstart: () => {
          const words = description.split(" ");
          let index = 0;

          intervalRef.current = setInterval(() => {
            if (index < words.length-1) {
              setAnimatedText((prev) => (prev ? prev + " " : "") + words[index]);
              index++;
            } else {
              clearInterval(intervalRef.current);
            }
          }, 300);
        },
        onend: () => {
          clearInterval(intervalRef.current);
        },
      });
    } else {
      clearInterval(intervalRef.current);
      setAnimatedText("");
    }
  };

  // Cleanup interval on unmount
  useEffect(() => {
    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <div
      onClick={handleClick}
      style={{
        width: "300px",
        border: "1px solid #ccc",
        borderRadius: "10px",
        overflow: "hidden",
        cursor: "pointer",
        boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
        transition: "transform 0.2s ease-in-out",
      }}
    >
      <img
        src={image}
        alt="Card"
        style={{ width: "100%", height: "auto", display: "block" }}
      />
      {showContent && (
        <div
          style={{
            padding: "15px",
            backgroundColor: "black",
            minHeight: "60px",
            animation: "fadeIn 0.3s ease-in-out",
          }}
        >
          <p style={{ lineHeight: "1.5", fontSize: "16px", color: "white" }}>
            {animatedText}
          </p>
        </div>
      )}
    </div>
  );
};

export default function App() {
  const [selectedVoice, setSelectedVoice] = useState("UK English Male");

  const cards = [
    {
      image:
        "https://imgs.search.brave.com/baRVQRuiV_lbH9GS3AQLIc2bWvy4Kfq72B1sHka42d0/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/YnJpdGFubmljYS5j/b20vNDMvMTc4MTQz/LTA1MC0xRThENjAx/My9tYXJibGUtcG9y/dGFsLVRhai1NYWhh/bC1JbmRpYS1BZ3Jh/LmpwZz93PTMwMA",
      description:
        "The Taj Mahal is an ivory-white marble mausoleum on the right bank of the river Yamuna in Agra, Uttar Pradesh, India. It was commissioned in 1631 by the fifth Mughal emperor, Shah Jahan (r. 1628–1658), to house the tomb of his beloved wife, Mumtaz Mahal; it also houses the tomb of Shah Jahan himself. The tomb is the centrepiece of a 17-hectare (42-acre) complex, which includes a mosque and a guest house, and is set in formal gardens bounded on three sides by a crenellated wall.",
    },
    {
      image: "https://via.placeholder.com/300x200/ff0000/ffffff",
      description: "This is the second monument's information. You can hear this as well.",
    },
  ];

  return (
    <div style={{ padding: 20 }}>
      <h2>Virtual Guide - Multilingual Text-to-Speech</h2>
      <label htmlFor="voice-select" style={{ fontWeight: "bold" }}>
        Select Language / Voice:{" "}
      </label>
      <select
        id="voice-select"
        value={selectedVoice}
        onChange={(e) => setSelectedVoice(e.target.value)}
        style={{ marginBottom: 20, fontSize: 16 }}
      >
        {voices.map((v) => (
          <option key={v.value} value={v.value}>
            {v.label}
          </option>
        ))}
      </select>

      <div style={{ display: "flex", gap: "20px" }}>
        {cards.map((card, index) => (
          <ImageCard
            key={index}
            image={card.image}
            description={card.description}
            voice={selectedVoice}
          />
        ))}
      </div>
    </div>
  );
}
