import { FC } from "react";
import { IconProps } from "./interfaces";

export const StickyTrackEn: FC<IconProps> = ({ onClick, className, title }) => {
  return (
    <svg
      width="58"
      height="58"
      viewBox="0 0 58 58"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
      className={`cursor-pointer hover:scale-105 transition duration-300 ease-in-out ${className}`}
    >
      <title>{title}</title>
      <rect width="58" height="58" rx="29" fill="#D81730" />
      <path
        d="M27.4514 32.08C27.0763 32.0303 26.7663 32.1909 26.5213 32.47C26.0927 32.9556 25.6372 33.4145 25.1856 33.881C24.9751 34.0951 24.8488 34.0722 24.6498 33.8695C23.226 32.4203 21.9247 30.8679 20.7727 29.1931C19.215 26.9332 17.9481 24.5319 17.2669 21.8515C16.888 20.3717 16.6966 18.8728 16.8573 17.3471C17.3204 12.9383 21.4961 9.64611 25.9243 10.2694C29.2732 10.7435 31.5275 12.6439 32.6527 15.8367C33.0393 16.9303 33.089 18.0736 33.0086 19.2284C32.9627 19.9052 33.4105 20.3908 34.0229 20.4214C34.6008 20.4482 35.0754 19.9893 35.1213 19.3316C35.2591 17.2668 34.9032 15.3052 33.9195 13.4622C31.5964 9.09549 26.2611 7.00773 21.5917 8.64811C17.3319 10.1432 14.5992 14.1887 14.7064 18.5172C14.6796 18.9913 14.7255 19.5419 14.7906 20.0887C15.0508 22.3256 15.7321 24.4325 16.7004 26.4591C17.8907 28.956 19.4484 31.212 21.232 33.3189C22.1314 34.3819 23.0997 35.3799 24.1216 36.3243C24.6077 36.7755 25.1818 36.8138 25.641 36.397C26.5366 35.5825 27.3901 34.7222 28.1556 33.7854C28.6953 33.1239 28.301 32.1909 27.4514 32.08Z"
        fill="white"
      />
      <path
        d="M42.8871 34.7644C41.7733 33.6555 40.6672 32.5428 39.5497 31.4415C39.3851 31.2771 39.3659 31.1586 39.4922 30.9559C40.0434 30.0497 40.3304 29.0632 40.3189 27.9925C40.3075 27.7478 40.3189 27.5031 40.2845 27.2622C39.875 24.1994 37.192 22.0925 34.2105 22.299C31.03 22.5169 28.4772 25.3618 28.948 28.7649C29.5221 32.8754 33.9962 34.99 37.5786 32.8716C37.7853 32.7493 37.9039 32.7684 38.0647 32.9328C39.0406 33.9232 40.0281 34.902 41.0117 35.8809C41.1992 36.0683 41.3791 36.2671 41.582 36.4315C41.9341 36.7221 42.3398 36.7604 42.7455 36.5577C43.1473 36.3589 43.3157 36.0109 43.3004 35.5635C43.289 35.2309 43.1167 34.9862 42.8909 34.7644H42.8871ZM34.6239 31.6021C32.6222 31.6021 30.9918 29.9847 30.9918 27.9887C30.9918 26.0042 32.6107 24.3829 34.5933 24.3791C36.5988 24.3791 38.2254 25.9965 38.2254 27.9925C38.2254 29.9771 36.6064 31.6021 34.6239 31.606V31.6021Z"
        fill="white"
      />
      <path
        d="M24.9519 12.1814C21.5379 12.1776 18.7899 14.8924 18.7822 18.2764C18.7784 21.7063 21.4996 24.4441 24.9098 24.4479C28.3161 24.4479 31.0603 21.7254 31.0641 18.3338C31.0641 14.9268 28.3429 12.1814 24.9519 12.1776V12.1814ZM24.9059 22.3602C22.6899 22.3296 20.914 20.6624 20.8719 18.3261C20.8337 16.1122 22.6976 14.2691 24.9213 14.2691C27.2253 14.3341 28.9438 16.0395 28.9667 18.3261C28.9897 20.5477 27.1373 22.3946 24.9059 22.364V22.3602Z"
        fill="white"
      />
      <path
        d="M9.0552 41.947V40.8794H14.6643V41.947H12.4914V47.9097H11.2281V41.947H9.0552ZM15.1432 47.9097V42.637H16.3481V43.5158H16.403C16.4992 43.2114 16.6639 42.9768 16.8974 42.8121C17.1331 42.645 17.402 42.5615 17.7041 42.5615C17.7727 42.5615 17.8494 42.5649 17.9341 42.5718C18.021 42.5764 18.0931 42.5844 18.1503 42.5958V43.7389C18.0977 43.7206 18.0141 43.7046 17.8997 43.6909C17.7876 43.6748 17.6789 43.6668 17.5736 43.6668C17.347 43.6668 17.1434 43.716 16.9626 43.8144C16.7841 43.9106 16.6433 44.0444 16.5403 44.2161C16.4374 44.3877 16.3859 44.5857 16.3859 44.8099V47.9097H15.1432ZM20.3988 48.0161C20.0647 48.0161 19.7637 47.9566 19.496 47.8376C19.2305 47.7163 19.0199 47.5378 18.8643 47.3021C18.711 47.0664 18.6343 46.7758 18.6343 46.4302C18.6343 46.1327 18.6893 45.8867 18.7991 45.6922C18.909 45.4976 19.0589 45.342 19.2488 45.2253C19.4387 45.1086 19.6527 45.0205 19.8907 44.961C20.131 44.8992 20.3793 44.8546 20.6356 44.8271C20.9446 44.7951 21.1952 44.7665 21.3874 44.7413C21.5796 44.7138 21.7192 44.6726 21.8062 44.6177C21.8955 44.5605 21.9401 44.4724 21.9401 44.3534V44.3328C21.9401 44.0742 21.8634 43.8739 21.7101 43.7321C21.5568 43.5902 21.3359 43.5192 21.0476 43.5192C20.7432 43.5192 20.5018 43.5856 20.3233 43.7183C20.147 43.8511 20.028 44.0078 19.9662 44.1886L18.806 44.0238C18.8975 43.7034 19.0486 43.4357 19.2591 43.2206C19.4696 43.0032 19.7271 42.8407 20.0315 42.7331C20.3358 42.6233 20.6723 42.5683 21.0407 42.5683C21.2947 42.5683 21.5476 42.5981 21.7993 42.6576C22.0511 42.7171 22.2811 42.8155 22.4893 42.9528C22.6976 43.0878 22.8646 43.2721 22.9905 43.5055C23.1187 43.7389 23.1827 44.0307 23.1827 44.3808V47.9097H21.9881V47.1854H21.947C21.8714 47.3319 21.765 47.4692 21.6277 47.5973C21.4927 47.7232 21.3222 47.8251 21.1162 47.9029C20.9125 47.9784 20.6734 48.0161 20.3988 48.0161ZM20.7215 47.103C20.9709 47.103 21.1872 47.0538 21.3702 46.9554C21.5533 46.8547 21.6941 46.722 21.7925 46.5572C21.8932 46.3924 21.9435 46.2128 21.9435 46.0183V45.3969C21.9046 45.429 21.8382 45.4587 21.7444 45.4862C21.6529 45.5137 21.5499 45.5377 21.4355 45.5583C21.321 45.5789 21.2078 45.5972 21.0956 45.6132C20.9835 45.6292 20.8862 45.643 20.8038 45.6544C20.6185 45.6796 20.4526 45.7208 20.3061 45.778C20.1596 45.8352 20.0441 45.9153 19.9594 46.0183C19.8747 46.119 19.8324 46.2494 19.8324 46.4096C19.8324 46.6385 19.9159 46.8112 20.083 46.928C20.25 47.0447 20.4629 47.103 20.7215 47.103ZM26.7322 48.0127C26.2059 48.0127 25.7539 47.8971 25.3763 47.666C25.001 47.4349 24.7115 47.1156 24.5078 46.7083C24.3064 46.2986 24.2057 45.8272 24.2057 45.294C24.2057 44.7585 24.3087 44.2859 24.5147 43.8762C24.7206 43.4643 25.0113 43.1439 25.3866 42.9151C25.7642 42.6839 26.2104 42.5683 26.7254 42.5683C27.1533 42.5683 27.5321 42.6473 27.8616 42.8052C28.1934 42.9608 28.4578 43.1817 28.6546 43.4677C28.8514 43.7515 28.9635 44.0833 28.991 44.4632H27.8033C27.7552 44.2092 27.6408 43.9975 27.46 43.8282C27.2815 43.6565 27.0423 43.5707 26.7425 43.5707C26.4885 43.5707 26.2654 43.6394 26.0731 43.7767C25.8809 43.9117 25.731 44.1062 25.6234 44.3602C25.5182 44.6143 25.4655 44.9186 25.4655 45.2734C25.4655 45.6327 25.5182 45.9416 25.6234 46.2002C25.7287 46.4565 25.8763 46.6545 26.0663 46.7941C26.2585 46.9314 26.4839 47 26.7425 47C26.9256 47 27.0892 46.9657 27.2334 46.8971C27.3799 46.8261 27.5023 46.7243 27.6007 46.5915C27.6991 46.4588 27.7666 46.2975 27.8033 46.1075H28.991C28.9612 46.4806 28.8514 46.8112 28.6614 47.0996C28.4715 47.3857 28.2129 47.6099 27.8856 47.7724C27.5584 47.9326 27.1739 48.0127 26.7322 48.0127ZM31.1442 46.2551L31.1408 44.755H31.3399L33.2347 42.637H34.6868L32.356 45.2322H32.0985L31.1442 46.2551ZM30.0114 47.9097V40.8794H31.254V47.9097H30.0114ZM33.3206 47.9097L31.6042 45.5102L32.4418 44.6349L34.807 47.9097H33.3206ZM35.515 47.9097V42.637H36.7576V47.9097H35.515ZM36.1397 41.8887C35.9429 41.8887 35.7736 41.8234 35.6317 41.693C35.4898 41.5603 35.4188 41.4012 35.4188 41.2158C35.4188 41.0282 35.4898 40.8691 35.6317 40.7387C35.7736 40.6059 35.9429 40.5396 36.1397 40.5396C36.3388 40.5396 36.5082 40.6059 36.6478 40.7387C36.7897 40.8691 36.8606 41.0282 36.8606 41.2158C36.8606 41.4012 36.7897 41.5603 36.6478 41.693C36.5082 41.8234 36.3388 41.8887 36.1397 41.8887ZM39.2781 44.8202V47.9097H38.0355V42.637H39.2232V43.533H39.285C39.4063 43.2377 39.5997 43.0032 39.8651 42.8292C40.1329 42.6553 40.4636 42.5683 40.8572 42.5683C41.2211 42.5683 41.538 42.6462 41.8081 42.8018C42.0804 42.9574 42.291 43.1828 42.4397 43.478C42.5907 43.7732 42.6651 44.1314 42.6628 44.5525V47.9097H41.4202V44.7447C41.4202 44.3923 41.3286 44.1165 41.1456 43.9174C40.9648 43.7183 40.7142 43.6188 40.3938 43.6188C40.1764 43.6188 39.983 43.6668 39.8136 43.7629C39.6466 43.8568 39.515 43.9929 39.4189 44.1714C39.325 44.35 39.2781 44.5662 39.2781 44.8202ZM46.2192 49.9969C45.7729 49.9969 45.3896 49.9362 45.0692 49.8149C44.7488 49.6959 44.4914 49.5357 44.2968 49.3343C44.1023 49.1329 43.9673 48.9098 43.8918 48.6649L45.0108 48.3937C45.0612 48.4967 45.1344 48.5986 45.2305 48.6993C45.3267 48.8022 45.456 48.8869 45.6184 48.9533C45.7832 49.0219 45.9903 49.0563 46.2398 49.0563C46.5922 49.0563 46.884 48.9705 47.1151 48.7988C47.3463 48.6295 47.4618 48.3503 47.4618 47.9612V46.9623H47.4001C47.336 47.0904 47.2421 47.222 47.1186 47.3571C46.9973 47.4921 46.8359 47.6054 46.6345 47.6969C46.4354 47.7884 46.1849 47.8342 45.8828 47.8342C45.4777 47.8342 45.1104 47.7392 44.7809 47.5493C44.4536 47.3571 44.1927 47.071 43.9982 46.6911C43.8059 46.3089 43.7098 45.8306 43.7098 45.2562C43.7098 44.6772 43.8059 44.1886 43.9982 43.7904C44.1927 43.3899 44.4547 43.0867 44.7843 42.8807C45.1138 42.6725 45.4811 42.5683 45.8862 42.5683C46.1951 42.5683 46.4492 42.621 46.6483 42.7263C46.8497 42.8292 47.0099 42.954 47.1289 43.1004C47.2479 43.2446 47.3383 43.3808 47.4001 43.5089H47.4687V42.637H48.6942V47.9955C48.6942 48.4464 48.5866 48.8194 48.3715 49.1146C48.1564 49.4098 47.8623 49.6307 47.4893 49.7772C47.1163 49.9236 46.6929 49.9969 46.2192 49.9969ZM46.2295 46.8593C46.4927 46.8593 46.7169 46.7952 46.9023 46.6671C47.0877 46.5389 47.2284 46.3547 47.3245 46.1144C47.4206 45.8741 47.4687 45.5857 47.4687 45.2493C47.4687 44.9175 47.4206 44.6269 47.3245 44.3774C47.2307 44.128 47.0911 43.9346 46.9057 43.7973C46.7227 43.6577 46.4972 43.5879 46.2295 43.5879C45.9526 43.5879 45.7214 43.66 45.5361 43.8041C45.3507 43.9483 45.2111 44.1463 45.1173 44.398C45.0234 44.6475 44.9765 44.9312 44.9765 45.2493C44.9765 45.572 45.0234 45.8546 45.1173 46.0972C45.2134 46.3375 45.3541 46.5252 45.5395 46.6602C45.7271 46.7929 45.9571 46.8593 46.2295 46.8593Z"
        fill="white"
      />
    </svg>
  );
};
