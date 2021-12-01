import dbConnect from '../../../database/connect'
import Products from '../../../models/Products'
export default async function handler(req, res) {
  const { method, query } = req
  await dbConnect()
  query.skip = parseInt(query.skip)

  switch (method) {
    case 'GET':
      const result = await Products.find({}).limit(4).skip(query.skip)
      const totalProducts = await Products.find({}).countDocuments()
      const products = result.map(doc => {
        const product = doc.toObject()
        product._id = `${product._id}`
        return product
      })

      return res.status(200).json({ data: { products, totalProducts } })
  }
}
