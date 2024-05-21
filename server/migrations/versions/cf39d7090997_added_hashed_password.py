"""added hashed password

Revision ID: cf39d7090997
Revises: 6fcfcdecbe70
Create Date: 2024-05-21 10:44:07.275416

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'cf39d7090997'
down_revision = '6fcfcdecbe70'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('users_table', schema=None) as batch_op:
        batch_op.add_column(sa.Column('_hashed_password', sa.String(), nullable=True))

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('users_table', schema=None) as batch_op:
        batch_op.drop_column('_hashed_password')

    # ### end Alembic commands ###