import PouchDB from 'pouchdb'
import PouchDbFind from 'pouchdb-find'

PouchDB.plugin(PouchDbFind)

export default PouchDB