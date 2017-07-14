package tests

import (
	"database/sql"
	"testing"

	"github.com/go-xorm/core"
	. "github.com/go-xorm/tests"
	"github.com/go-xorm/xorm"
	_ "github.com/lib/pq"
)

func connStr() string {
	//conn := "dbname=xorm_test user=lunny password=1234 sslmode=disable"
	conn := "postgres://?dbname=xorm_test&sslmode=disable&user=postgres"
	if ConnectionPort != "" {
		conn += "&port=" + ConnectionPort
	}
	return conn
}

func newPostgresEngine() (*xorm.Engine, error) {
	orm, err := xorm.NewEngine("postgres", connStr())
	if err != nil {
		return nil, err
	}
	orm.ShowSQL(ShowTestSql)

	tables, err := orm.DBMetas()
	if err != nil {
		return nil, err
	}
	for _, table := range tables {
		_, err = orm.Exec("drop table \"" + table.Name + "\"")
		if err != nil {
			return nil, err
		}
	}

	return orm, err
}

func newPostgresDriverDB() (*sql.DB, error) {
	return sql.Open("postgres", connStr())
}

func TestPostgres(t *testing.T) {
	engine, err := newPostgresEngine()
	if err != nil {
		t.Error(err)
		return
	}
	defer engine.Close()

	BaseTestAll(engine, t)
	UserTest1(engine, t)
	BaseTestAllSnakeMapper(engine, t)
	BaseTestAll2(engine, t)
	BaseTestAll3(engine, t)
}

func TestPostgresWithCache(t *testing.T) {
	engine, err := newPostgresEngine()
	if err != nil {
		t.Error(err)
		return
	}
	defer engine.Close()

	engine.SetDefaultCacher(NewCacher())

	BaseTestAll(engine, t)
	BaseTestAllSnakeMapper(engine, t)
	BaseTestAll2(engine, t)
}

func TestPostgresSameMapper(t *testing.T) {
	engine, err := newPostgresEngine()
	if err != nil {
		t.Error(err)
		return
	}
	defer engine.Close()

	engine.SetMapper(core.SameMapper{})

	BaseTestAll(engine, t)
	BaseTestAllSameMapper(engine, t)
	BaseTestAll2(engine, t)
	BaseTestAll3(engine, t)
}

func TestPostgresWithCacheSameMapper(t *testing.T) {
	engine, err := newPostgresEngine()
	if err != nil {
		t.Error(err)
		return
	}
	defer engine.Close()

	engine.SetDefaultCacher(NewCacher())
	engine.SetMapper(core.SameMapper{})

	BaseTestAll(engine, t)
	BaseTestAllSameMapper(engine, t)
	BaseTestAll2(engine, t)
}

const (
	createTablePostgres = `CREATE TABLE IF NOT EXISTS "big_struct" ("id" SERIAL PRIMARY KEY  NOT NULL, "name" VARCHAR(255) NULL, "title" VARCHAR(255) NULL, "age" VARCHAR(255) NULL, "alias" VARCHAR(255) NULL, "nick_name" VARCHAR(255) NULL);`
	dropTablePostgres   = `DROP TABLE IF EXISTS "big_struct";`
)

func BenchmarkPostgresDriverInsert(t *testing.B) {
	DoBenchDriver(newPostgresDriverDB, createTablePostgres, dropTablePostgres,
		DoBenchDriverInsert, t)
}

func BenchmarkPostgresDriverFind(t *testing.B) {
	DoBenchDriver(newPostgresDriverDB, createTablePostgres, dropTablePostgres,
		DoBenchDriverFind, t)
}

func BenchmarkPostgresNoCacheInsert(t *testing.B) {
	engine, err := newPostgresEngine()

	defer engine.Close()
	if err != nil {
		t.Error(err)
		return
	}
	//engine.ShowSQL = true
	DoBenchInsert(engine, t)
}

func BenchmarkPostgresNoCacheFind(t *testing.B) {
	engine, err := newPostgresEngine()

	defer engine.Close()
	if err != nil {
		t.Error(err)
		return
	}
	//engine.ShowSQL = true
	DoBenchFind(engine, t)
}

func BenchmarkPostgresNoCacheFindPtr(t *testing.B) {
	engine, err := newPostgresEngine()

	defer engine.Close()
	if err != nil {
		t.Error(err)
		return
	}
	//engine.ShowSQL = true
	DoBenchFindPtr(engine, t)
}

func BenchmarkPostgresCacheInsert(t *testing.B) {
	engine, err := newPostgresEngine()

	defer engine.Close()
	if err != nil {
		t.Error(err)
		return
	}
	engine.SetDefaultCacher(NewCacher())

	DoBenchInsert(engine, t)
}

func BenchmarkPostgresCacheFind(t *testing.B) {
	engine, err := newPostgresEngine()

	defer engine.Close()
	if err != nil {
		t.Error(err)
		return
	}
	engine.SetDefaultCacher(NewCacher())

	DoBenchFind(engine, t)
}

func BenchmarkPostgresCacheFindPtr(t *testing.B) {
	engine, err := newPostgresEngine()

	defer engine.Close()
	if err != nil {
		t.Error(err)
		return
	}
	engine.SetDefaultCacher(NewCacher())

	DoBenchFindPtr(engine, t)
}
