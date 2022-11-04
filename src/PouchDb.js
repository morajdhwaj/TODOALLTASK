import PouchDb from "pouchdb";

const db = new PouchDb("secondpouch");

db.info().then((info) => {
  console.log(info);
});

export async function insertToDB(data) {
  try {
    const getresponse = await db.post(data);
    return getresponse;
  } catch (error) {
    console.error(error);
  }
  return null;
}

export function getToDB() {
  const val = db
    .allDocs({ include_docs: true, descending: true }, (err, doc) => doc.rows)
    .catch((err) => {
      console.error(err);
    });
  return val;
}

export async function removeToDB(id) {
  try {
    const doc = await db.get(id);
    db.remove(doc);
  } catch (error) {
    console.error(error);
  }
}

export async function editDB(id, data) {
  try {
    const doc = await db.get(id);
    const response = await db.put({
      _id: id,
      _rev: doc._rev,
      ...data,
    });
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}

export async function deleteAll() {
  try {
    await db.destroy();
  } catch (err) {
    console.log(err);
  }
}
