using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Bank.Migrations
{
    /// <inheritdoc />
    public partial class withdrawalsDbSet : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Withdraws_Operations_OperationId",
                table: "Withdraws");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Withdraws",
                table: "Withdraws");

            migrationBuilder.RenameTable(
                name: "Withdraws",
                newName: "Withdrawals");

            migrationBuilder.RenameIndex(
                name: "IX_Withdraws_OperationId",
                table: "Withdrawals",
                newName: "IX_Withdrawals_OperationId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Withdrawals",
                table: "Withdrawals",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Withdrawals_Operations_OperationId",
                table: "Withdrawals",
                column: "OperationId",
                principalTable: "Operations",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Withdrawals_Operations_OperationId",
                table: "Withdrawals");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Withdrawals",
                table: "Withdrawals");

            migrationBuilder.RenameTable(
                name: "Withdrawals",
                newName: "Withdraws");

            migrationBuilder.RenameIndex(
                name: "IX_Withdrawals_OperationId",
                table: "Withdraws",
                newName: "IX_Withdraws_OperationId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Withdraws",
                table: "Withdraws",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Withdraws_Operations_OperationId",
                table: "Withdraws",
                column: "OperationId",
                principalTable: "Operations",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
