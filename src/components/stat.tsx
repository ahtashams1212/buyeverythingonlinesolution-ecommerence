const stats = [
    { id: 1,logo:'',name: 'Free Shipping', value: 'Free shipping on all orders over $50' },
    { id: 2, name: '24/7 Customer Support', value: 'Have a question? Get in touch.' },
    { id: 3, name: 'Best prices', value: 'We offer the best prices on the market.' },
  ]
  
  export default function Stats() {
    return (
      <div className="bg-white py-3 sm:py-4">
        <div className=" max-w-7xl px-2 lg:px-3">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
                <dt className="text-base leading-7 text-gray-600">{stat.name}</dt>
                <dd className="order-first text-1xl font-semibold tracking-tight text-gray-900 sm:text-2xl">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    )
  }
  