import { useEffect, useState } from 'react';

export default function LandingImage({ percentage }: { percentage: number }) {
  const [realPercentage, setRealPercentage] = useState(9722);

  useEffect(() => {
    // percentage: 0 ~ 1000
    // realPercentage: 9722 ~ 0
    if (percentage > 100000) setRealPercentage(0);
    else setRealPercentage(9722 - (9722 * percentage) / 100000);
  }, [percentage]);

  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 2781 2090"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_53_4)">
        <path
          d="M1469.93 1238.69C1365.54 1238.69 1299.27 1174.76 1299.27 1079.17C1299.27 983.577 1369.06 919.652 1465.24 919.652C1561.42 919.652 1626.52 983.577 1626.52 1079.17C1626.52 1089.14 1625.64 1099.11 1624.17 1108.49H1414.8C1418.91 1133.13 1441.2 1149.55 1469.93 1149.55C1491.04 1149.55 1505.41 1140.75 1512.74 1126.09L1615.38 1160.69C1590.16 1208.78 1540.31 1238.69 1469.93 1238.69ZM1414.8 1045.16H1511.57C1510.1 1024.92 1493.1 1008.79 1465.24 1008.79C1439.14 1008.79 1418.91 1022.87 1414.8 1045.16Z"
          fill="black"
        />
      </g>
      <g filter="url(#filter1_d_53_4)">
        <path
          d="M870.762 1230.48V805.878H1006.82L1145.23 1036.94H1147.57V805.878H1269.56V1230.48H1133.5L997.438 999.411H992.746V1230.48H870.762Z"
          fill="black"
        />
      </g>
      <g filter="url(#filter2_d_53_4)">
        <path
          d="M420.245 1716.62C363.944 1716.62 298.847 1696.09 250.17 1662.66L318.786 1567.66C350.455 1589.36 386.816 1601.67 420.245 1601.67C448.395 1601.67 464.816 1592.87 464.816 1578.21C464.816 1566.48 454.26 1560.62 416.726 1551.24L397.959 1546.54C312.922 1525.43 265.418 1477.93 265.418 1414C265.418 1334.83 338.14 1275.6 436.666 1275.6C488.861 1275.6 541.643 1292.02 589.147 1322.51L523.463 1419.28C491.207 1399.34 464.23 1390.54 436.666 1390.54C408.516 1390.54 387.403 1399.93 387.403 1412.83C387.403 1422.21 398.546 1428.66 427.282 1435.7L446.049 1440.39C541.057 1464.44 586.801 1507.84 586.801 1574.69C586.801 1656.8 517.012 1716.62 420.245 1716.62Z"
          fill="black"
        />
      </g>
      <g filter="url(#filter3_d_53_4)">
        <path
          d="M609.057 1708.41V1283.81H726.35V1708.41H609.057Z"
          fill="black"
        />
      </g>
      <g filter="url(#filter4_d_53_4)">
        <path
          d="M287.109 673.978V249.377H409.094V673.978H287.109Z"
          fill="black"
        />
      </g>
      <g filter="url(#filter5_d_53_4)">
        <path
          d="M770.468 673.978H653.175V638.79H650.829C632.942 668.993 605.378 682.188 569.897 682.188C488.378 682.188 431.491 613.572 431.491 522.67C431.491 431.767 488.378 363.151 569.897 363.151C605.378 363.151 632.942 376.346 650.829 406.549H653.175V249.377H770.468V673.978ZM602.153 576.624C633.235 576.624 655.521 554.339 655.521 522.67C655.521 491 633.235 468.715 602.153 468.715C571.07 468.715 548.784 491 548.784 522.67C548.784 554.339 571.07 576.624 602.153 576.624Z"
          fill="black"
        />
      </g>
      <g filter="url(#filter6_d_53_4)">
        <path
          d="M1327.31 576.624C1358.39 576.624 1380.67 554.339 1380.67 522.67C1380.67 491.001 1358.39 468.715 1327.31 468.715C1296.22 468.715 1273.94 491.001 1273.94 522.67C1273.94 554.339 1296.22 576.624 1327.31 576.624ZM1495.62 673.978H1378.33V638.79H1375.98C1358.1 668.993 1330.53 682.188 1295.05 682.188C1213.53 682.188 1156.64 613.572 1156.64 522.67C1156.64 431.768 1213.53 363.151 1295.05 363.151C1330.53 363.151 1358.1 376.347 1375.98 406.55H1378.33V371.362H1495.62V673.978Z"
          fill="black"
        />
      </g>
      <g filter="url(#filter7_d_53_4)">
        <path
          d="M2305.58 1230.48V927.862H2422.88V968.915H2425.22C2441.94 938.125 2469.79 919.652 2504.39 919.652C2513.19 919.652 2521.4 920.825 2530.78 923.171V1032.84C2517.88 1029.32 2503.81 1027.56 2492.08 1027.56C2445.75 1027.56 2422.88 1054.54 2422.88 1108.49V1230.48H2305.58Z"
          fill="black"
        />
      </g>
      <path
        d="M148 933.461C318.07 956.565 696.844 953.929 851.383 758.554C1044.56 514.334 1022.79 339.176 895.172 251.848C767.558 164.519 464.785 284.627 668.969 488.811C873.153 692.995 1168.67 685.488 1288.78 696.498C1408.88 707.508 1908.58 499.821 1984.9 404.986C2061.22 310.15 1412.89 1148.65 1179.43 1104.87C945.968 1061.08 2381.76 824.113 2203.35 816.856C2024.94 809.6 920.445 1943.12 585.143 1523.99C249.842 1104.87 1708.15 1330.82 1984.9 1396.38C2206.3 1448.82 2519.22 1418.23 2648 1396.38"
        stroke="#F65742"
        strokeDasharray="9722"
        strokeDashoffset={realPercentage}
        strokeWidth="50"
        id="maginc"
      />
      <g filter="url(#filter8_d_53_4)">
        <path
          d="M978.991 682.188C874.601 682.188 808.33 618.264 808.33 522.67C808.33 427.076 878.119 363.151 974.3 363.151C1070.48 363.151 1135.58 427.076 1135.58 522.67C1135.58 532.64 1134.7 542.609 1133.23 551.993H923.864C927.969 576.624 950.255 593.046 978.991 593.046C1000.1 593.046 1014.47 584.249 1021.8 569.587L1124.43 604.188C1099.22 652.279 1049.37 682.188 978.991 682.188ZM923.864 488.655H1020.63C1019.16 468.422 1002.16 452.294 974.3 452.294C948.202 452.294 927.969 466.369 923.864 488.655Z"
          fill="black"
        />
      </g>
      <g filter="url(#filter9_d_53_4)">
        <path
          d="M2134.03 1238.69C2029.64 1238.69 1963.37 1174.76 1963.37 1079.17C1963.37 983.577 2033.16 919.652 2129.34 919.652C2225.52 919.652 2290.61 983.577 2290.61 1079.17C2290.61 1089.14 2289.74 1099.11 2288.27 1108.49H2078.9C2083.01 1133.13 2105.29 1149.55 2134.03 1149.55C2155.14 1149.55 2169.51 1140.75 2176.84 1126.09L2279.47 1160.69C2254.25 1208.78 2204.4 1238.69 2134.03 1238.69ZM2078.9 1045.16H2175.67C2174.2 1024.92 2157.19 1008.79 2129.34 1008.79C2103.24 1008.79 2083.01 1022.87 2078.9 1045.16Z"
          fill="black"
        />
      </g>
      <g filter="url(#filter10_d_53_4)">
        <path
          d="M1484.84 1838.59V1409.3H1602.14V1444.48H1604.48C1622.37 1414.28 1649.93 1401.09 1685.42 1401.09C1766.93 1401.09 1823.82 1469.7 1823.82 1560.6C1823.82 1651.51 1766.93 1720.12 1685.42 1720.12C1649.93 1720.12 1622.37 1706.93 1604.48 1676.72H1602.14V1838.59H1484.84ZM1653.16 1614.56C1684.24 1614.56 1706.53 1592.27 1706.53 1560.6C1706.53 1528.93 1684.24 1506.65 1653.16 1506.65C1622.08 1506.65 1599.79 1528.93 1599.79 1560.6C1599.79 1592.27 1622.08 1614.56 1653.16 1614.56Z"
          fill="black"
        />
      </g>
      <g filter="url(#filter11_d_53_4)">
        <path
          d="M1969.93 1716.62C1920.67 1716.62 1872.58 1701.37 1843.26 1676.15L1896.04 1602.84C1922.43 1619.27 1946.47 1627.48 1969.93 1627.48C1986.94 1627.48 1995.74 1623.37 1995.74 1615.75C1995.74 1608.71 1988.7 1604.6 1969.93 1600.5L1956.44 1597.57C1889 1582.9 1852.64 1549.48 1852.64 1502.56C1852.64 1442.15 1911.87 1397.58 1991.05 1397.58C2030.92 1397.58 2069.04 1408.72 2108.34 1431.6L2057.32 1507.84C2036.79 1493.76 2014.5 1486.72 1991.05 1486.72C1973.45 1486.72 1964.07 1490.83 1964.07 1497.87C1964.07 1503.15 1968.76 1506.08 1981.08 1509.01L1995.74 1512.53C2071.98 1530.71 2107.17 1561.79 2107.17 1611.06C2107.17 1673.81 2052.04 1716.62 1969.93 1716.62Z"
          fill="black"
        />
        <path
          d="M2195.16 1716.62C2154.69 1716.62 2125.37 1687.88 2125.37 1649.18C2125.37 1610.47 2154.69 1581.73 2195.16 1581.73C2235.04 1581.73 2264.95 1610.47 2264.95 1649.18C2264.95 1687.88 2235.04 1716.62 2195.16 1716.62Z"
          fill="black"
        />
      </g>
      <g filter="url(#filter12_d_53_4)">
        <path
          d="M940.955 1716.62C836.565 1716.62 770.294 1652.69 770.294 1557.1C770.294 1461.51 840.083 1397.58 936.264 1397.58C1032.44 1397.58 1097.54 1461.51 1097.54 1557.1C1097.54 1567.07 1096.66 1577.04 1095.2 1586.42H885.828C889.933 1611.06 912.219 1627.48 940.955 1627.48C962.068 1627.48 976.437 1618.68 983.767 1604.02L1086.4 1638.62C1061.18 1686.71 1011.33 1716.62 940.955 1716.62ZM885.828 1523.09H982.594C981.128 1502.85 964.121 1486.72 936.264 1486.72C910.166 1486.72 889.933 1500.8 885.828 1523.09Z"
          fill="black"
        />
      </g>
      <g filter="url(#filter13_d_53_4)">
        <path
          d="M1291.27 1716.62C1186.88 1716.62 1120.61 1652.69 1120.61 1557.1C1120.61 1461.51 1190.4 1397.58 1286.58 1397.58C1382.76 1397.58 1447.86 1461.51 1447.86 1557.1C1447.86 1567.07 1446.98 1577.04 1445.52 1586.42H1236.15C1240.25 1611.06 1262.54 1627.48 1291.27 1627.48C1312.39 1627.48 1326.76 1618.68 1334.09 1604.02L1436.72 1638.62C1411.5 1686.71 1361.65 1716.62 1291.27 1716.62ZM1236.15 1523.09H1332.91C1331.45 1502.85 1314.44 1486.72 1286.58 1486.72C1260.49 1486.72 1240.25 1500.8 1236.15 1523.09Z"
          fill="black"
        />
      </g>
      <g filter="url(#filter14_d_53_4)">
        <path
          d="M1739.2 1230.48L1613.69 927.862H1736.26L1797.26 1099.7H1799.6L1860.59 927.862H1983.17L1857.66 1230.48H1739.2Z"
          fill="black"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_53_4"
          x="1049.27"
          y="670.652"
          width="827.248"
          height="819.037"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="1" />
          <feGaussianBlur stdDeviation="125" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_53_4"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_53_4"
            result="shape"
          />
        </filter>
        <filter
          id="filter1_d_53_4"
          x="620.762"
          y="556.878"
          width="898.797"
          height="924.601"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="1" />
          <feGaussianBlur stdDeviation="125" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_53_4"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_53_4"
            result="shape"
          />
        </filter>
        <filter
          id="filter2_d_53_4"
          x="0.169922"
          y="1026.6"
          width="838.977"
          height="941.022"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="1" />
          <feGaussianBlur stdDeviation="125" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_53_4"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_53_4"
            result="shape"
          />
        </filter>
        <filter
          id="filter3_d_53_4"
          x="359.057"
          y="1034.81"
          width="617.293"
          height="924.601"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="1" />
          <feGaussianBlur stdDeviation="125" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_53_4"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_53_4"
            result="shape"
          />
        </filter>
        <filter
          id="filter4_d_53_4"
          x="137.109"
          y="103.377"
          width="421.984"
          height="724.601"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="75" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_53_4"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_53_4"
            result="shape"
          />
        </filter>
        <filter
          id="filter5_d_53_4"
          x="181.491"
          y="0.376709"
          width="838.977"
          height="932.811"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="1" />
          <feGaussianBlur stdDeviation="125" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_53_4"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_53_4"
            result="shape"
          />
        </filter>
        <filter
          id="filter6_d_53_4"
          x="906.645"
          y="114.151"
          width="838.977"
          height="819.037"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="1" />
          <feGaussianBlur stdDeviation="125" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_53_4"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_53_4"
            result="shape"
          />
        </filter>
        <filter
          id="filter7_d_53_4"
          x="2055.58"
          y="670.652"
          width="725.203"
          height="810.827"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="1" />
          <feGaussianBlur stdDeviation="125" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_53_4"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_53_4"
            result="shape"
          />
        </filter>
        <filter
          id="filter8_d_53_4"
          x="558.33"
          y="114.151"
          width="827.248"
          height="819.037"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="1" />
          <feGaussianBlur stdDeviation="125" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_53_4"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_53_4"
            result="shape"
          />
        </filter>
        <filter
          id="filter9_d_53_4"
          x="1713.37"
          y="670.652"
          width="827.248"
          height="819.037"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="1" />
          <feGaussianBlur stdDeviation="125" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_53_4"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_53_4"
            result="shape"
          />
        </filter>
        <filter
          id="filter10_d_53_4"
          x="1234.84"
          y="1152.09"
          width="838.977"
          height="937.503"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="1" />
          <feGaussianBlur stdDeviation="125" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_53_4"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_53_4"
            result="shape"
          />
        </filter>
        <filter
          id="filter11_d_53_4"
          x="1593.26"
          y="1148.58"
          width="921.692"
          height="819.037"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="1" />
          <feGaussianBlur stdDeviation="125" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_53_4"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_53_4"
            result="shape"
          />
        </filter>
        <filter
          id="filter12_d_53_4"
          x="520.294"
          y="1148.58"
          width="827.248"
          height="819.037"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="1" />
          <feGaussianBlur stdDeviation="125" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_53_4"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_53_4"
            result="shape"
          />
        </filter>
        <filter
          id="filter13_d_53_4"
          x="870.613"
          y="1148.58"
          width="827.248"
          height="819.037"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="1" />
          <feGaussianBlur stdDeviation="125" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_53_4"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_53_4"
            result="shape"
          />
        </filter>
        <filter
          id="filter14_d_53_4"
          x="1363.69"
          y="678.862"
          width="869.473"
          height="802.616"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="1" />
          <feGaussianBlur stdDeviation="125" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_53_4"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_53_4"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}
