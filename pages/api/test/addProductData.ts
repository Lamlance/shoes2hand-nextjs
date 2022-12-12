import { PrismaClient } from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'

const data = [{ "productTitle": "Hypoxis hirsuta (L.) Coville", "productDescription": "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.", "productQuantity": 39, "shopID": 3 },
{ "productTitle": "Sphenopholis intermedia (Rydb.) Rydb.", "productDescription": "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.", "productQuantity": 41, "shopID": 3 },
{ "productTitle": "Antrophyum cajenense (Desv.) Spreng.", "productDescription": "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.", "productQuantity": 62, "shopID": 1 },
{ "productTitle": "Gutierrezia texana (DC.) Torr. & A. Gray var. glutinosa (S. Schauer) M.A. Lane", "productDescription": "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.", "productQuantity": 34, "shopID": 2 },
{ "productTitle": "Atriplex atacamensis Phil.", "productDescription": "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.", "productQuantity": 69, "shopID": 1 },
{ "productTitle": "Plumeria obtusa L.", "productDescription": "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.", "productQuantity": 71, "shopID": 2 },
{ "productTitle": "Cirsium perplexans (Rydb.) Petr.", "productDescription": "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.", "productQuantity": 16, "shopID": 3 },
{ "productTitle": "Melaleuca diosmifolia Andrews", "productDescription": "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.", "productQuantity": 73, "shopID": 1 },
{ "productTitle": "Pharus parvifolius Nash", "productDescription": "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.", "productQuantity": 49, "shopID": 3 },
{ "productTitle": "Leptosiphon nudatus (Greene) J.M. Porter & L.A. Johnson", "productDescription": "Phasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.", "productQuantity": 76, "shopID": 1 },
{ "productTitle": "Ipomopsis aggregata (Pursh) V.E. Grant ssp. aggregata", "productDescription": "Phasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.", "productQuantity": 77, "shopID": 2 },
{ "productTitle": "Eriogonum compositum Douglas ex Benth.", "productDescription": "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.", "productQuantity": 69, "shopID": 3 },
{ "productTitle": "Carex luzulina Olney var. ablata (L.H. Bailey) F.J. Herm.", "productDescription": "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.", "productQuantity": 97, "shopID": 4 },
{ "productTitle": "Astragalus miguelensis Greene", "productDescription": "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.", "productQuantity": 53, "shopID": 1 },
{ "productTitle": "Vernonia albicaulis Pers.", "productDescription": "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.", "productQuantity": 23, "shopID": 4 },
{ "productTitle": "Magnolia portoricensis Bello", "productDescription": "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.", "productQuantity": 31, "shopID": 4 },
{ "productTitle": "Draba paysonii J.F. Macbr. var. treleasii (O.E. Schulz) C.L. Hitchc.", "productDescription": "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.", "productQuantity": 24, "shopID": 1 },
{ "productTitle": "Trifolium bejariense Moric.", "productDescription": "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.", "productQuantity": 83, "shopID": 0 },
{ "productTitle": "Oncidium floridanum Ames", "productDescription": "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.", "productQuantity": 33, "shopID": 0 },
{ "productTitle": "Cheilanthes xparishii Davenport (pro sp.)", "productDescription": "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.", "productQuantity": 41, "shopID": 4 }]

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const { query: { secrete }, method } = req;
  console.log(secrete, method)
  if (method == "GET" && (secrete == "lamhoang123")) {
    const prisma = new PrismaClient();
    await prisma.$connect();
    const result = await prisma.pRODUCT.createMany({
      data: data
    });
    res.json({
      number: result
    })
    return
  }
  res.json({
    msg: "To add mock data request with GET and the secrete password"
  })
}