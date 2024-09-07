import React from "react";

interface Dim {
  h: number;
  w: number;
  color: string;
}

const Urjakavach = (prop: Dim) => {
  return (
    <svg
      width={prop.w}
      height={prop.h}
      viewBox="0 0 440 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M161.133 6.4C163 10 164.867 16.2667 165.267 20.4L166.067 28H83.1333C1.26665 28 0.333313 28 0.333313 30.6667C0.333313 32.1333 1.26665 33.3333 2.33331 33.3333C3.93331 33.3333 4.33331 35.8667 4.33331 48.1333C4.33331 64.6667 6.46665 70.9333 13.6666 75.0667C18.8666 78.1333 27.6666 78 33.1333 74.5333C35.6666 73.0667 37.6666 72.4 37.6666 73.0667C37.6666 73.8667 39.5333 75.0667 41.6666 75.8667L45.6666 77.2V58.5333V39.8667L42.0666 40.2667C38.3333 40.6667 38.3333 40.6667 37.6666 53.3333C37 66.8 35 71.7333 29.6666 74.6667C25 77.0667 18.8666 75.7333 15.8 71.6C13.4 68.2667 13 65.6 12.4666 50.5333L12.0666 33.3333H68.3333H124.6L124.067 41.3333C123.8 45.7333 123.533 49.3333 123.667 49.3333C123.8 49.3333 127.4 48.1333 131.667 46.6667C135.933 45.2 140.733 44 142.2 44C146.067 44 151 47.6 151 50.5333C151 52.6667 150.333 52.8 144.6 51.6C138.867 50.4 137.267 50.6667 130.867 53.6C121.667 57.8667 117.4 64.5333 120.333 70C124.2 77.0667 135.933 79.6 145.133 75.2C148.2 73.7333 150.2 73.4667 151.4 74.2667C152.2 75.0667 154.067 76 155.4 76.4C157.8 77.3333 157.8 76.4 157.4 61.2C156.867 41.0667 156.067 40 140.867 40C131.267 40 131 39.8667 131 36.6667V33.3333H149H167V54V74.6667L170.467 76C172.333 76.8 174.067 77.3333 174.467 77.3333C174.733 77.3333 175 72.5333 175 66.6667C175 54.5333 176.6 50.2667 183.133 44.8C188.2 40.5333 194.067 40.5333 194.733 44.8C195.267 48.6667 190.333 52.5333 185 52.5333C181.8 52.5333 180.2 53.3333 179.267 55.2C178.2 57.4667 179.4 59.7333 185.267 67.3333C192.867 77.0667 194.467 78.1333 196.733 74.4C197.8 72.6667 197.267 71.2 193.933 67.4667C191.533 64.8 189.667 62.2667 189.667 62C189.667 61.7333 191.8 60.4 194.467 59.2C200.6 56.2667 202.6 52.1333 200.467 46.9333C197.667 40.2667 188.733 38.1333 179.667 41.8667L175 43.8667V38.5333V33.3333H192.467H209.933L209.4 41.3333C209.133 45.7333 208.867 49.3333 209 49.3333C209 49.3333 212.467 48.1333 216.733 46.6667C220.867 45.2 225.667 44 227.4 44C231.4 44 236.333 47.6 236.333 50.6667C236.333 52.8 235.8 52.9333 231 51.7333C220.733 49.0667 204.333 57.4667 204.333 65.2C204.333 75.3333 218.733 80.8 230.467 75.2C234.467 73.3333 235.133 73.3333 237.933 75.2C239.533 76.4 241.4 77.3333 241.933 77.3333C243.533 77.3333 243.267 51.7333 241.667 47.0667C239.8 41.8667 235.533 40 225 40C216.6 40 216.333 39.8667 216.333 36.6667V33.3333H251.8H287.4L286.733 38.4C285.933 43.8667 271.133 69.4667 269 68.8C268.2 68.6667 267.667 63.3333 267.667 56.8C267.667 46.1333 267.4 44.9333 264.467 42.5333C261.133 39.8667 251.8 39.0667 248.333 41.3333C246.6 42.4 246.6 42.8 248.6 44.8C250.467 46.8 251.4 46.8 255 45.3333C260.467 43.0667 262.867 45.0667 259.8 49.4667C257 53.4667 257.133 58 260.2 64.8C262.733 70.5333 271.133 78 273.8 77.0667C276.333 76.2667 295 41.2 295 37.3333C295 32.9333 296.6 32.1333 303.533 33.0667L308.733 33.6L307.933 41.6C307.267 48.6667 307.533 49.4667 309.4 48.6667C314.6 46.4 323.667 44 326.333 44C330.467 44 335.667 48.4 334.6 51.0667C333.933 52.8 333 52.9333 328.867 51.7333C318.333 48.9333 303 57.2 303 65.8667C303 75.3333 316.867 80.5333 328.333 75.3333C333 73.2 333.667 73.2 336.467 75.2C338.2 76.4 340.2 77.3333 340.733 77.3333C341.533 77.3333 341.8 70.5333 341.4 61.8667C340.867 46.9333 340.733 46.1333 337.133 43.2C334.067 40.5333 332.067 40 324.2 40C315.267 40 315 39.8667 315 36.6667V33.3333H345H375V36.8C375 39.7333 374.6 40 372.067 39.0667C366.733 37.2 359.133 38 355.4 40.8C349.933 44.8 345.667 51.8667 345.667 56.5333C345.667 68.4 361.8 80 374.067 76.8C377.267 76 384.333 69.8667 384.333 67.8667C384.333 65.4667 375.4 66.6667 373 69.3333C366.467 76.6667 352.467 72.2667 352.333 62.8C352.2 53.6 362.6 42.6667 371.533 42.6667C375.4 42.6667 381.667 48 381.667 51.3333C381.667 52.4 382.467 53.3333 383.4 53.3333C386.733 53.3333 387 51.7333 384.333 48C382.733 45.7333 381.667 42.1333 381.667 38.9333C381.667 33.8667 381.933 33.6 386.067 33.2C396.733 32 396.333 31.2 396.333 53.3333V73.2L400.333 75.3333L404.333 77.4667V67.8667C404.333 56.8 407.133 50.4 414.2 45.6C419.933 41.7333 423.533 41.8667 427 46.2667C431 51.4667 430.067 59.6 424.333 67.4667C420.2 73.2 420.2 73.6 422.467 75.3333C426.333 78.2667 427.667 77.7333 431.667 72C439.267 61.0667 436.333 45.6 425.667 39.7333C420.067 36.6667 415 37.3333 408.733 42.1333L404.333 45.4667V39.4667V33.4667L421.933 33.0667C437.533 32.6667 439.667 32.4 440.067 30.2667C440.467 28.2667 439 28 422.6 28H404.733L403.8 21.3333C402.867 13.8667 401.133 9.2 397.267 3.6C395.4 0.933337 393.8 4.09782e-06 390.333 4.09782e-06H385.8L389.933 6.13334C393.933 12 396.2 18.9333 396.333 25.0667V28L285.4 27.7333L174.467 27.3333L172.867 17.8667C172.067 12.8 170.333 6.66667 169.133 4.26667C167.267 0.666671 166.2 4.09782e-06 162.333 4.09782e-06H157.8L161.133 6.4ZM147 58C152.6 60.9333 151.933 63.4667 144.733 68C137.4 72.6667 130.733 74.2667 126.2 72.1333C121.8 70.1333 122.2 66.6667 127.4 61.7333C133.933 55.4667 139.933 54.4 147 58ZM231.667 57.8667C237 60.1333 237.4 61.6 233.8 65.2C229.933 69.0667 223.8 72 217.4 72.8C212.867 73.4667 211.133 73.0667 209.4 71.0667C207.267 68.6667 207.267 68.4 209.533 64.5333C212.2 60.1333 219.133 56.1333 224.067 56C225.667 56 229.133 56.9333 231.667 57.8667ZM332.6 59.6C335.267 62 335.267 62 330.467 66.1333C321.933 73.6 307.133 75.3333 305.933 69.2C305.4 66.2667 310.733 60 315.533 57.8667C320.733 55.4667 329 56.4 332.6 59.6Z"
        fill={prop.color}
      />
      <path
        d="M97.6666 5.99998C97.6666 7.86665 99.4 9.73332 107 16.5333C108.067 17.4667 109.667 19.3333 110.467 20.8C113.133 25.2 113.8 22 111.533 15.4667C109.4 9.33332 106.6 6.53332 100.733 4.66665C98.4666 3.99998 97.6666 4.39998 97.6666 5.99998Z"
        fill={prop.color}
      />
      <path
        d="M107 67.6C107 89.2 106.6 97.4667 105.267 99.2C102.733 102.667 99.2667 100.533 97.5333 94.4L96.2 89.0667L92.8667 92.1333L89.5333 95.3333L93.5333 98.9333C98.0667 102.933 103.267 103.733 108.733 101.2C114.6 98.5333 115.133 95.7333 114.733 66.6667L114.333 39.3333L110.733 38.9333L107 38.5333V67.6Z"
        fill={prop.color}
      />
      <path
        d="M55 57.0667C55 74.1333 55 74.2667 58.3333 75.7333C60.2 76.6667 62.0667 77.3333 62.3333 77.3333C62.7333 77.3333 63 72.5333 63 66.6667C63 54.5333 64.6 50.2667 71 44.8C75.2667 41.3333 79.5333 40.4 82.8667 42.5333C85.4 44.1333 83.5333 48.6667 79.4 50.5333L75.9333 52.1333L79.2667 55.6C82.6 58.8 82.7333 58.9333 86.0667 56.6667C98.8667 48.2667 84.3333 36 68.3333 41.6C64.8667 42.8 63.6667 42.8 63.2667 41.6C63 40.6667 61 40 58.8667 40H55V57.0667Z"
        fill={prop.color}
      />
    </svg>
  );
};

export default Urjakavach;
