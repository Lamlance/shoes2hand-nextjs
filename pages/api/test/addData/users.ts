import { myPrismaClient } from "../../../../helper/prismaClient";
import type { NextApiRequest, NextApiResponse } from "next";
//50 users
const userData = [
  {
    userId: 1,
    userName: "Christoffer Bernhardi",
    email: "cbernhardi0@abc.net.au",
    address: "3 Waywood Junction",
    phone: "402-961-2889",
  },
  {
    userId: 2,
    userName: "Alysa Arnley",
    email: "aarnley1@slate.com",
    address: "90 Sloan Avenue",
    phone: "522-919-6475",
  },
  {
    userId: 3,
    userName: "Annalee Buttrick",
    email: "abuttrick2@illinois.edu",
    address: "3 Fair Oaks Hill",
    phone: "803-754-6174",
  },
  {
    userId: 4,
    userName: "Willie Medland",
    email: "wmedland3@amazonaws.com",
    address: "3 Coolidge Alley",
    phone: "654-491-7698",
  },
  {
    userId: 5,
    userName: "Maxim Urey",
    email: "murey4@multiply.com",
    address: "259 Kensington Alley",
    phone: "631-527-9923",
  },
  {
    userId: 6,
    userName: "Rici Oosthout de Vree",
    email: "roosthout5@cdc.gov",
    address: "5739 Blaine Plaza",
    phone: "792-600-6973",
  },
  {
    userId: 7,
    userName: "Talbot Biddlecombe",
    email: "tbiddlecombe6@acquirethisname.com",
    address: "09769 Ludington Hill",
    phone: "227-244-2079",
  },
  {
    userId: 8,
    userName: "Hector Eslie",
    email: "heslie7@paypal.com",
    address: "267 Independence Junction",
    phone: "406-569-4767",
  },
  {
    userId: 9,
    userName: "Darnell Wynne",
    email: "dwynne8@nydailynews.com",
    address: "39 Shoshone Alley",
    phone: "404-598-5120",
  },
  {
    userId: 10,
    userName: "Joshuah Bountiff",
    email: "jbountiff9@hud.gov",
    address: "8407 Scoville Place",
    phone: "106-670-2735",
  },
  {
    userId: 11,
    userName: "Arlie Barton",
    email: "abartona@dot.gov",
    address: "835 Linden Pass",
    phone: "744-230-3895",
  },
  {
    userId: 12,
    userName: "Hans Ridgedell",
    email: "hridgedellb@illinois.edu",
    address: "5 Harbort Trail",
    phone: "889-999-7562",
  },
  {
    userId: 13,
    userName: "Barri Surmon",
    email: "bsurmonc@soup.io",
    address: "597 Moose Plaza",
    phone: "631-890-0480",
  },
  {
    userId: 14,
    userName: "Marchall Feehan",
    email: "mfeehand@wiley.com",
    address: "78 Karstens Pass",
    phone: "434-866-8843",
  },
  {
    userId: 15,
    userName: "Carie Livingstone",
    email: "clivingstonee@biblegateway.com",
    address: "65658 Kedzie Way",
    phone: "973-743-9498",
  },
  {
    userId: 16,
    userName: "Kingsley Berresford",
    email: "kberresfordf@ucoz.ru",
    address: "8 Grayhawk Place",
    phone: "462-861-4159",
  },
  {
    userId: 17,
    userName: "Mabel Dellit",
    email: "mdellitg@amazon.co.jp",
    address: "1055 Arapahoe Circle",
    phone: "232-774-5634",
  },
  {
    userId: 18,
    userName: "Torrin Roderick",
    email: "troderickh@goo.ne.jp",
    address: "8 Ramsey Point",
    phone: "855-117-6501",
  },
  {
    userId: 19,
    userName: "Justinn Stanlack",
    email: "jstanlacki@tripadvisor.com",
    address: "6027 Hudson Parkway",
    phone: "488-410-3709",
  },
  {
    userId: 20,
    userName: "Rikki Tuffrey",
    email: "rtuffreyj@comcast.net",
    address: "8213 Gulseth Lane",
    phone: "791-497-9520",
  },
  {
    userId: 21,
    userName: "Glennis Iannazzi",
    email: "giannazzik@wikispaces.com",
    address: "946 Clemons Parkway",
    phone: "238-107-7995",
  },
  {
    userId: 22,
    userName: "Philippa Kleine",
    email: "pkleinel@phoca.cz",
    address: "801 Service Junction",
    phone: "994-919-3258",
  },
  {
    userId: 23,
    userName: "Drusilla Biggadike",
    email: "dbiggadikem@qq.com",
    address: "6 Nobel Way",
    phone: "968-620-0128",
  },
  {
    userId: 24,
    userName: "Madelle Sibery",
    email: "msiberyn@vimeo.com",
    address: "0998 Northview Circle",
    phone: "723-874-0472",
  },
  {
    userId: 25,
    userName: "Duky Reinhart",
    email: "dreinharto@imgur.com",
    address: "6565 Coleman Street",
    phone: "264-188-8838",
  },
  {
    userId: 26,
    userName: "Birch Poulton",
    email: "bpoultonp@wikia.com",
    address: "7 Carey Park",
    phone: "429-219-0101",
  },
  {
    userId: 27,
    userName: "Stanislaw Margrie",
    email: "smargrieq@google.com",
    address: "8589 Mallory Center",
    phone: "724-999-5627",
  },
  {
    userId: 28,
    userName: "Tedmund Tallow",
    email: "ttallowr@discuz.net",
    address: "91104 Vermont Pass",
    phone: "521-482-3608",
  },
  {
    userId: 29,
    userName: "Alain Redmayne",
    email: "aredmaynes@shop-pro.jp",
    address: "76 Scoville Drive",
    phone: "930-217-9479",
  },
  {
    userId: 30,
    userName: "Muriel Ketteringham",
    email: "mketteringhamt@wsj.com",
    address: "7 Meadow Valley Point",
    phone: "872-772-1300",
  },
  {
    userId: 31,
    userName: "Salomi Hassent",
    email: "shassentu@economist.com",
    address: "36414 Anderson Place",
    phone: "868-695-5506",
  },
  {
    userId: 32,
    userName: "Maureene Alastair",
    email: "malastairv@illinois.edu",
    address: "72 West Plaza",
    phone: "137-829-7582",
  },
  {
    userId: 33,
    userName: "Imogen Kuschke",
    email: "ikuschkew@ibm.com",
    address: "49 Old Gate Crossing",
    phone: "489-121-6911",
  },
  {
    userId: 34,
    userName: "Alane Glaisner",
    email: "aglaisnerx@sphinn.com",
    address: "856 Macpherson Parkway",
    phone: "971-832-5671",
  },
  {
    userId: 35,
    userName: "Adrian Ollis",
    email: "aollisy@fc2.com",
    address: "57531 Golden Leaf Street",
    phone: "718-283-4346",
  },
  {
    userId: 36,
    userName: "Iosep Boumphrey",
    email: "iboumphreyz@skyrock.com",
    address: "6007 Hauk Road",
    phone: "474-743-1458",
  },
  {
    userId: 37,
    userName: "Lusa McKernan",
    email: "lmckernan10@hostgator.com",
    address: "178 Judy Way",
    phone: "282-540-3778",
  },
  {
    userId: 38,
    userName: "Elsi McBride",
    email: "emcbride11@google.ru",
    address: "372 6th Plaza",
    phone: "595-108-8076",
  },
  {
    userId: 39,
    userName: "Torrance Klain",
    email: "tklain12@gov.uk",
    address: "1 4th Alley",
    phone: "684-224-0945",
  },
  {
    userId: 40,
    userName: "Sibley Godmer",
    email: "sgodmer13@dagondesign.com",
    address: "18450 Barnett Trail",
    phone: "226-111-7363",
  },
  {
    userId: 41,
    userName: "Bertrando Hedaux",
    email: "bhedaux14@yellowpages.com",
    address: "4129 Sugar Trail",
    phone: "804-695-7392",
  },
  {
    userId: 42,
    userName: "Kikelia Eilhermann",
    email: "keilhermann15@addthis.com",
    address: "8 Stang Road",
    phone: "369-696-0603",
  },
  {
    userId: 43,
    userName: "Julina McClary",
    email: "jmcclary16@prweb.com",
    address: "92 Del Mar Court",
    phone: "140-557-8876",
  },
  {
    userId: 44,
    userName: "Adrian Coyte",
    email: "acoyte17@myspace.com",
    address: "3570 Holy Cross Alley",
    phone: "316-903-0137",
  },
  {
    userId: 45,
    userName: "Amery Girardet",
    email: "agirardet18@youtu.be",
    address: "5688 Longview Place",
    phone: "902-541-9306",
  },
  {
    userId: 46,
    userName: "Daniel Oxteby",
    email: "doxteby19@pcworld.com",
    address: "186 Gerald Lane",
    phone: "983-711-3174",
  },
  {
    userId: 47,
    userName: "Lea Francescozzi",
    email: "lfrancescozzi1a@storify.com",
    address: "7 Fisk Center",
    phone: "127-241-3911",
  },
  {
    userId: 48,
    userName: "Terrel Schimmang",
    email: "tschimmang1b@networkadvertising.org",
    address: "1504 Oxford Street",
    phone: "514-865-6965",
  },
  {
    userId: 49,
    userName: "Tripp Lavis",
    email: "tlavis1c@wsj.com",
    address: "7644 Everett Way",
    phone: "125-661-0751",
  },
  {
    userId: 50,
    userName: "Bunni Shapero",
    email: "bshapero1d@goo.ne.jp",
    address: "20704 Ludington Road",
    phone: "935-922-9999",
  },
];

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  if (req.query.password && req.query.password === "lam123") {

    const littleData = userData.slice(0,11)

    await myPrismaClient.$connect();
    const addData = await myPrismaClient.uSER.createMany({
      data: littleData,
      skipDuplicates: true,
    });
    res.status(200).json({
      addCount: addData.count,
    });
    return;
  }
  res.status(200).json({
    addCount: 0,
    error: "Wrong params",
  });
}
