import { Card,Label, RangeSlider,TextInput  } from "flowbite-react";
import React, { useState } from "react";
import styles from "../../styles";
import { FaCopy } from "react-icons/fa";
import lcStyles from "../../lcStyles";


const PwdGenerator = () => {
  const [password, setPassword] = useState("qjrp");
  const [length, setLength] = useState(4);
  const [includeUpperCase, setIncludeUpperCase] = useState(false);
  const [includeSymbols, setIncludeSymbols] = useState(false);
  const [includeNumbers, setIncludeNumbers] = useState(false);

  const generatePassword = () => {
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const symbolChars = "!@#$%^&*()_-+=<>?/{}[]|";
    const numberChars = "0123456789";

    let chars = lowercaseChars;
    if (includeUpperCase) chars += uppercaseChars;
    if (includeSymbols) chars += symbolChars;
    if (includeNumbers) chars += numberChars;

    let generatedPassword = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      generatedPassword += chars[randomIndex];
    }

    setPassword(generatedPassword);
  };

  const copyPasswordToClipboard = () => {
    navigator.clipboard.writeText(password);
    alert("Password copied to clipboard!");
  };

  return (
    <>
      <section id="pwdGenerator" className={`${lcStyles.backgroundColor} sm:py-10 py-6 h-8/12`}>
        <div className={`flex justify-center text-center w-full sm:my-6`}>
          <p className={`${styles.heading2}`}>Random Password Generator</p>
        </div>

        <div className={`flex justify-center w-full`}>
          <Card id='card' className={`${styles.marginX} flex w-1/2 `} >
            <div id='content' className={`flex flex-row justify-between`}>
              <p className={`${lcStyles.p} font-semibold w-3/4 overflow-x-auto justify-items-center`}>{`${password} `}</p>
              <FaCopy 
                className={`relative  cursor-pointer flex justify-items-end self-center right-0 w-10 h-full`} 
                onClick={copyPasswordToClipboard}
              />
            </div>
          </Card>
        </div>
        
        <div className="flex justify-center items-center">
          <Card className={`${styles.alignCenter} ${styles.marginX} sm:my-6`}>
            <div id="title" className="mt-6"> 
              <h3 className={`${lcStyles.h3}`}>Customise your password</h3>
              <hr className={`${lcStyles.hr}`}/>
            </div>

            <Label htmlFor="default-range" value="Password Length:" className={`${lcStyles.p}`} />
            <RangeSlider 
              id="default-range" 
              value={length}
              onChange={(e) => setLength(parseInt(e.target.value))}
              min={4}
              max={64}/>

            <TextInput
              sizing="lg"
              type="number"
              value={length}
              onChange={(e) => setLength(parseInt(e.target.value))}
              min={4}
              max={64}
            />
            <br />
            
            <div className={`flex`}>
              <input
                  className={`self-center`}
                  type="checkbox"
                  checked={includeUpperCase}
                  onChange={(e) => setIncludeUpperCase(e.target.checked)}
                />
              <label className={`${lcStyles.p} ml-5`} >
                Include Uppercase Letters
              </label>
            </div>
            <br />

            <div className={`flex`}>
              <input
                  className={`self-center`}
                  type="checkbox"
                  checked={includeSymbols}
                  onChange={(e) => setIncludeSymbols(e.target.checked)}
                />
              <label className={`${lcStyles.p} ml-5`}>
                Include Symbols
              </label>
            </div>
            
            <br />
            <div className={`flex`}>
              <input
                className={`self-center`}
                type="checkbox"
                checked={includeNumbers}
                onChange={(e) => setIncludeNumbers(e.target.checked)}
              />
              <label className={`${lcStyles.p} ml-5`}>
                Include Numbers  
              </label>
            </div>
            
            <br />

            <button onClick={generatePassword} className={`${lcStyles.button2}`}>Generate Password</button>
            <br />
          </Card>
        </div>
        
      </section>
    </>
  );
};

export default PwdGenerator;
