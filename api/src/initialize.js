export const initializeDatabase = (driver) => {
  const initCypher = `CALL apoc.schema.assert({}, {Theme: ["id"], Set: ["set_num"], PartCategory: ["id"], Part: ["part_num"], Color: ["id"], Inventory: ["id"], InventoryPart: ["_id"]})`
  const executeQuery = (driver) => {
    const session = driver.session()
    return session
      .writeTransaction((tx) => tx.run(initCypher))
      .then()
      .finally(() => session.close())
  }

  executeQuery(driver).catch((error) => {
    console.error('Database initialization failed to complete\n', error.message)
  })
}
